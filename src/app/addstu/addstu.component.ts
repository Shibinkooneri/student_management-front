import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder,Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstu',
  templateUrl: './addstu.component.html',
  styleUrl: './addstu.component.css'
})
export class AddstuComponent {
  stuform: FormGroup;

  constructor(private ds:DataService,private fb:FormBuilder,private r:Router){
  
  this.stuform=this.fb.group({
    name:['',Validators.required],
    email:['',Validators.required],
    Phone:['',Validators.required],
    age:['',Validators.required],
    course:['',Validators.required],
    enrollment_date:['',Validators.required],
  })}
  submitted(){
    var name:any=this.stuform.value.name  
    var phone:any=this.stuform.value.phone    
    var email:any=this.stuform.value.email    
    var age:any=this.stuform.value.age    
    var course:any=this.stuform.value.course    
    var enrollment_date:any=this.stuform.value.enrollment_date
    
    var formd=new FormData()
    formd.append('name',name)
    formd.append('age',age)
    formd.append('Number',phone)
    formd.append('Email',email)
    formd.append('course',course)
    formd.append('Enrollment_date',enrollment_date)
    
    this.ds.addstu(formd).then(res=>res.json()).then(res=>{
      if(res['msg']=='created'){
        alert("Student added!")
        this.r.navigateByUrl('')
      }
      else{
        alert("Student adding is failed!")
      }
    })

  }


}
