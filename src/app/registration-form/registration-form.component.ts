import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDetail } from '../model/user-detail';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
})
export class RegistrationFormComponent implements OnInit {

  userInfoForm:FormGroup;
  user!:UserDetail;
  user1?:UserDetail;
  check:boolean=false;
  
  name:string='';

  constructor(
    private formBuilder:FormBuilder
  )
   {
    this.userInfoForm=this.formBuilder.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required]],
      address:['',[Validators.required]]
    })
    }

  ngOnInit(): void {
  }

  create():void{
  //  console.log(firstName);
  this.user1 = this.userInfoForm.value;
  this.check=true;
  }

}
