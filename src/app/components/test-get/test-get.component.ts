import { Component } from '@angular/core';
import { TeacherService } from '../admin/teacher/services/teachers.services';
import { ITeacherResponse } from '../admin/teacher/models/teachers.model';

@Component({
  selector: 'app-test-get',
  standalone: true,
  imports: [],
  templateUrl: './test-get.component.html',
  styleUrl: './test-get.component.css'
})
export class TestGetComponent {
  teachers! : ITeacherResponse[]
  json!:string
  /**
   *
   */
  constructor(private teacherService: TeacherService) {
    this.teacherService.getAll().subscribe(t => {
      this.teachers = t
      this.json = JSON.stringify(this.teachers)
    })
  }
}
