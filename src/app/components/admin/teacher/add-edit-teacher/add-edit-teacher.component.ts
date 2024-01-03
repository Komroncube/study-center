import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzInputModule} from 'ng-zorro-antd/input'
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TeacherService } from '../services/teachers.services';
import { Router } from '@angular/router';
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
  constructor(
    private fb: FormBuilder, 
    private $teacherService: TeacherService, 
    private router: Router, 
    private route: ActivatedRoute) {
    
  }
  add() {
    if(this.form.invalid){
      Object.values(this.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    }
    const request = this.form.getRawValue()
    return this.$teacherService.add(request).subscribe(result =>{
      if(result)
      {
        this.router.navigate(['../'], {relativeTo: this.route})
      }
    })
  }
  resetForm() {
    this.form.reset()
  }
}
