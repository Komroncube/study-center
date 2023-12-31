import { Component, OnInit } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { TeacherService } from '../services/teachers.services';
import { ITeacherResponse } from '../models/teachers.model';
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [NzDividerModule, NzTableModule, NzButtonModule, NzIconModule, NzIconDirective],
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.css'
})
export class TeacherListComponent implements OnInit {
  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  teachers:ITeacherResponse[] = []
  /**
   *
   */
  constructor(private $teacherService: TeacherService) {}
  ngOnInit(): void {
    this.$teacherService.getAll().subscribe(teacher=>{
      console.log(teacher);
      this.teachers = teacher
    });
  }

  //   this.$teacherService.getComments().subscribe(x=>
  //     console.log(x))
  // }
}
