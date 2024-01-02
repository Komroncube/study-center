import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzInputModule} from 'ng-zorro-antd/input'
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterLink } from '@angular/router';
import { TeacherService } from '../services/teachers.services';
@Component({
  selector: 'app-edit-teacher',
  standalone: true,
  imports: [NzFormModule, ReactiveFormsModule, NzInputModule, NzButtonModule, NzIconModule, RouterLink],
  templateUrl: './add-edit-teacher.component.html',
  styleUrl: './add-edit-teacher.component.css'
})
export class AddEditTeacherComponent {
  
  form = this.fb.nonNullable.group({
    name:['', Validators.required],
    description: ['', Validators.required],
    address: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    dateOfRegister: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    telegramUserName: ['', Validators.required],
    specialization: ['', Validators.required],   
  })
  /**
   *
   */
  constructor(private fb: FormBuilder, private $teacherService: TeacherService) {
    
    
  }
  add() {
    if(this.form.invalid){
      return;
    }
    const request = this.form.getRawValue()
    return this.$teacherService.add(request).subscribe()
  }
}
