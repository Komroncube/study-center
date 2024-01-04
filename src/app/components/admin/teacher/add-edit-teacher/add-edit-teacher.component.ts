import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzInputModule} from 'ng-zorro-antd/input'
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TeacherService } from '../services/teachers.services';
import { Router } from '@angular/router';
import { ITeacherRequest, ITeacherResponse } from '../models/teachers.model';
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
  get isEdit() {
    return this.id>0
  }
  /**
   *
   */
  get id() {
    return  Number(this.route.snapshot.params["id"])
  }
  /**
   * 
   * @param fb 
   * @param $teacherService 
   * @param router 
   * @param route 
   */
  constructor(
    private fb: FormBuilder, 
    private $teacherService: TeacherService, 
    private router: Router, 
    private route: ActivatedRoute) 
  {
    if(this.id>0){
      this.$teacherService.getById(this.id).subscribe((teacher: ITeacherResponse) => {
        this.setFormValues(teacher);
        

      })
    } 
  }
  private setFormValues(teacher: ITeacherResponse) {
    this.form.controls.name.setValue(teacher.name);
    this.form.controls.description.setValue(teacher.description);
    this.form.controls.address.setValue(teacher.address);
    this.form.controls.dateOfBirth.setValue(teacher.dateOfBirth.toString());
    this.form.controls.dateOfRegister.setValue(teacher.dateOfRegister?.toString());
    this.form.controls.phone.setValue(teacher.phone);
    this.form.controls.email.setValue(teacher.email);
    this.form.controls.telegramUserName.setValue(teacher.telegramUserName);
    this.form.controls.specialization.setValue(teacher.specialization);
  }

  submit() {
    if(this.form.invalid){
      this.updateValueAndValidity();
      return;
    }
    const request = this.form.getRawValue()
    if(this.isEdit)
    {
      this.saveTeacher(request)
      return
    }
    else {
      this.addTeacher(request)
      return
    }
    
  }
  private addTeacher(request:ITeacherRequest) {
    return this.$teacherService.add(request).subscribe(result => {
      if (result) {
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    });
  }
  /**
   * editni saqlash uchun ishlatiladi
   * @param request 
   * @returns 
   */
  private saveTeacher(request: ITeacherRequest) {
    return this.$teacherService.update(this.id, request).subscribe(result => {
      if (result) {
        this.router.navigate(['../../'], { relativeTo: this.route });
      }
    });
  }

  private updateValueAndValidity() {
    Object.values(this.form.controls).forEach(control => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
  }

  resetForm() {
    this.form.reset()
  }
}
