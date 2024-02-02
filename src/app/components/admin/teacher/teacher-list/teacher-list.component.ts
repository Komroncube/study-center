import { Component } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzIconModule, NzIconDirective } from 'ng-zorro-antd/icon';
import { StepBackwardOutline, CaretLeftOutline, SettingOutline} from '@ant-design/icons-angular/icons'
import { IconDefinition } from '@ant-design/icons-angular';
import { TeacherService } from '../services/teachers.services';
import { ITeacherResponse } from '../models/teachers.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

const icons: IconDefinition[] =  [
  StepBackwardOutline,
  CaretLeftOutline,
  SettingOutline
];
@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [
    NzDividerModule, 
    NzTableModule, 
    NzButtonModule, 
    NzIconModule, 
    NzIconDirective, 
    RouterLink, 
    CommonModule],
  templateUrl: './teacher-list.component.html',
  styles: `
    #basictable {
      margin-top: 10px;
    }
    `
})
export class TeacherListComponent {
  
  /**
   * 
   */
  teachers$:Observable<ITeacherResponse[]>;
  /**
   * 
   * @param $teacherService
   * @param router 
   * @param route 
   */
  constructor(
    private $teacherService: TeacherService,
    private router: Router,
    private route: ActivatedRoute) {

      this.teachers$ = this.$teacherService.getAll();

    }



  loadteachers(){
    this.teachers$ = this.$teacherService.getAll();
  }
  /**
   * 
   * @param id 
   */
  edit(id:number) {
    // edit/3
    this.router.navigate(['../edit-teacher', id], {relativeTo: this.route})
  }
  delete(id:number) {
    this.$teacherService.delete(id).subscribe(result => {
      console.log(result);
    })
    this.teachers$ = this.$teacherService.getAll();
  }
}
