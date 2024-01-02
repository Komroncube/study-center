import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzIconModule, NzIconDirective } from 'ng-zorro-antd/icon';
import { StepBackwardOutline, CaretLeftOutline, SettingOutline} from '@ant-design/icons-angular/icons'
import { IconDefinition } from '@ant-design/icons-angular';
import { TeacherService } from '../services/teachers.services';
import { ITeacherResponse } from '../models/teachers.model';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

const icons: IconDefinition[] =  [
  StepBackwardOutline,
  CaretLeftOutline,
  SettingOutline
];
@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [NzDividerModule, NzTableModule, NzButtonModule, NzIconModule, NzIconDirective, RouterLink],
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.css'
})
export class TeacherListComponent implements OnInit, OnDestroy {
  subsribtion?: Subscription
  
  teachers:ITeacherResponse[] = []
  /**
   *
   */
  constructor(private $teacherService: TeacherService) {}
  ngOnInit(): void {
    this.subsribtion = this.$teacherService.getAll().subscribe(teacher=>{
      
      teacher.forEach(item => {
        console.log(item)
        //console.log(typeof item.dateOfRegister);
      })
      console.log();
      this.teachers = teacher
      
      
    });
  }
  ngOnDestroy() {
    this.subsribtion?.unsubscribe()
  }
  loadteachers(){
    this.$teacherService.getAll().subscribe(teachers=> {
      console.log('empty');
      console.log(teachers);
      this.teachers = teachers
    })
  }
  //   this.$teacherService.getComments().subscribe(x=>
  //     console.log(x))
  // }
}
