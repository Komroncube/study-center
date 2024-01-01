import { Component, OnInit } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzIconModule, NzIconDirective } from 'ng-zorro-antd/icon';
import { StepBackwardOutline, CaretLeftOutline, SettingOutline} from '@ant-design/icons-angular/icons'
import { IconDefinition } from '@ant-design/icons-angular';
import { TeacherService } from '../services/teachers.services';
import { ITeacherResponse } from '../models/teachers.model';

const icons: IconDefinition[] =  [
  StepBackwardOutline,
  CaretLeftOutline,
  SettingOutline
];
@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [NzDividerModule, NzTableModule, NzButtonModule, NzIconModule, NzIconDirective],
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.css'
})
export class TeacherListComponent implements OnInit {
 
  
  teachers:ITeacherResponse[] = []
  /**
   *
   */
  constructor(private $teacherService: TeacherService) {}
  ngOnInit(): void {
    this.$teacherService.getAll().subscribe(teacher=>{
      
      teacher.forEach(item => {
        console.log(item.dateOfRegister)
        console.log(typeof item.dateOfRegister);
      })
      console.log();
      this.teachers = teacher
    });
  }

  //   this.$teacherService.getComments().subscribe(x=>
  //     console.log(x))
  // }
}
