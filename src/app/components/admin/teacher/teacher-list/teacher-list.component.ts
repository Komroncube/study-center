import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzIconModule, NzIconDirective } from 'ng-zorro-antd/icon';
import { StepBackwardOutline, CaretLeftOutline, SettingOutline} from '@ant-design/icons-angular/icons'
import { IconDefinition } from '@ant-design/icons-angular';
import { TeacherService } from '../services/teachers.services';
import { ITeacherResponse } from '../models/teachers.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
  constructor(
    private $teacherService: TeacherService,
    private router: Router,
    private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.getAll();
  }
  private getAll() {
    this.subsribtion = this.$teacherService.getAll().subscribe(teachers => {

      teachers.forEach(item => {
        console.log(item);
      });
      this.teachers = teachers;
    });
  }

  ngOnDestroy() {
    this.subsribtion?.unsubscribe()
  }
  loadteachers(){
    this.$teacherService.getAll().subscribe(teachers=> {
      
      this.teachers = teachers
    })
  }
  edit(id:number) {
    // edit/3
    this.router.navigate(['../edit-teacher', id], {relativeTo: this.route})
  }
  delete(id:number) {
    this.$teacherService.delete(id).subscribe(result => {
      console.log(result);
      this.getAll()
    })
  }
}
