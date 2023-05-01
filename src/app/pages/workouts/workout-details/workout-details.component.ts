import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ControlInput } from 'src/app/core/classes/control.class';
import { ExerciseSetService } from 'src/app/services/exercise-set.service';
import { ExercisesService } from 'src/app/services/exercises.service';
import { LoadingService } from 'src/app/services/loading.service';
import { TrainingDayService } from 'src/app/services/training-day.service';
import { UtilsService } from 'src/app/services/utils.service';
import { WorkoutsService } from 'src/app/services/workouts.service';
import { ExerciseSet } from '../../exercise-set/exercise-set-details/exercise-set-details.component';

enum WeekingDays {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

export interface TrainingSheet {
  id?: number;
  name: string;
  trainingDays: TrainingDay[];
}
export interface TrainingDay {
  id?: number;
  day: number;
  trainingSheetId: number;
  exerciseGroupId: number;
}

@Component({
  selector: 'app-workout-details',
  templateUrl: './workout-details.component.html',
  styleUrls: [
    '../../../core/shared/scss/details-item.shared.scss',
    './workout-details.component.scss',
  ],
})
export class WorkoutDetailsComponent {
  form: { [id: string]: ControlInput } = {
    name: new ControlInput({
      label: 'Nome',
      config: {
        name: 'name',
        hint: 'Nome do usuário',
        required: true,
        errors: {
          required: 'Campo obrigatório',
        },
      },
    }),
  };

  trainingDays: ControlInput[] = [];
  weekDays = [
    { id: WeekingDays.Sunday, name: 'Domingo' },
    { id: WeekingDays.Monday, name: 'Segunda' },
    { id: WeekingDays.Tuesday, name: 'Terça' },
    { id: WeekingDays.Wednesday, name: 'Quarta' },
    { id: WeekingDays.Thursday, name: 'Quinta' },
    { id: WeekingDays.Friday, name: 'Sexta' },
    { id: WeekingDays.Saturday, name: 'Sábado' },
  ];

  allExerciceSets: ExerciseSet[] = [];

  @ViewChild('reactiveForm') formRef!: NgForm;

  isEdit = false;
  editId: number | null = null;
  constructor(
    private utilsService: UtilsService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public loadingService: LoadingService,
    private workoutService: WorkoutsService,
    private trainingDayService: TrainingDayService,
    private exersiceSetService: ExerciseSetService
  ) {
    this.createTrainingDaysControllers();
  }

  ngOnInit(): void {}
  async ngAfterViewInit() {
    this.allExerciceSets = await this.exersiceSetService.getAll();
    this.insertSets();
    this.actRoute.params.subscribe(async (params) => {
      if (params['id'] !== 'new') {
        this.isEdit = true;
        this.editId = +params['id'];
        // Load data...
        setTimeout(() => {
          this.loadingService.activeLoading();
        }, 50);

        // Get data from API
        try {
          const data = await this.workoutService.getById(+params['id'], [
            'trainingDays',
          ]);
          console.log('data', data);
          this.formRef.controls['name'].setValue(data.name);
          this.fillTrainingDays(data);
        } catch (error) {
          console.error(error);
        } finally {
          setTimeout(() => {
            this.loadingService.deactiveLoading();
          }, 200);
        }
      }
    });
  }

  private createTrainingDaysControllers() {
    this.trainingDays = this.weekDays.map((day) => {
      return new ControlInput({
        label: day.name,
        selectOptions: [{ name: 'Sem treino', value: -1 }],
        value: -1,
        config: {
          name: `td_${day.id.toString()}`,
          required: true,
          errors: {
            required: 'Campo obrigatório',
          },
        },
      });
    });
  }

  private insertSets() {
    this.trainingDays.map((day) => {
      const atualList = day.selectOptions;
      atualList.push(
        ...this.allExerciceSets.map((x) => ({ name: x.name, value: x.id }))
      );

      return { ...day, selectOptions: atualList };
    });
  }

  private fillTrainingDays(data: TrainingSheet) {
    for (const day of data.trainingDays) {
      const control = this.trainingDays.find(
        (e) => e.config.name === `td_${day.day}`
      );
      if (control) {
        control.value = day.exerciseGroupId;
      }
    }
  }

  getErrorText(control: ControlInput) {
    return this.formRef && control
      ? this.utilsService.getErrorText(this.formRef, control)
      : '';
  }

  issueValues() {
    if (!this.formRef || !this.formRef.form) {
      return '';
    }

    const controls = this.formRef.form.controls;
    const keys = Object.keys(controls);

    let ret = '';
    for (const key of keys) {
      if (this.getErrorText(this.form[key]))
        ret += `${this.form[key].label}: ${this.getErrorText(
          this.form[key]
        )}\r\n`;
    }

    return ret;
  }

  maskFilled(control: ControlInput) {
    console.log('maskFilled');
  }

  dateEvents(name: string, event: any) {
    console.log('dateEvents', name, event);
  }

  async onSubmit() {
    console.log('onSubmit', this.formRef);
    const data = this.formRef.value;
    console.log('form value', data);

    const sheet = {
      name: data.name,
      trainingDays: this.trainingDays
        .filter((e) => e.value !== -1)
        .map((e) => {
          return {
            day: +e.config.name.split('_')[1],
            exerciseGroupId: e.value,
          };
        }),
    } as TrainingSheet;

    if (this.isEdit) {
      // Update

      try {
        const sheetCreated = await this.workoutService.update(this.editId!, {
          name: sheet.name,
        });

        // update list Days
        const result = await this.trainingDayService.updateList(
          sheet.trainingDays.map((e) => {
            return {
              ...e,
              trainingSheetId: this.editId!,
            };
          })
        );
        this.router.navigate(['workouts']);
      } catch (error) {
        console.log('error on update', error);
      }
    } else {
      // Create
      try {
        // Create Sheet
        const sheetCreated = await this.workoutService.create(sheet);
        // Create Days

        this.router.navigate(['workouts']);
      } catch (error) {
        console.log('error on create', error);
      }
    }
  }
}
