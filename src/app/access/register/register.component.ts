import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router, private service:UserService) { }

  ngOnInit(): void {
  }

  respdata:any;

  RedirectLogin(){
    this.router.navigate(['login']);
  }
  reactiveform=new FormGroup({
    emailId: new FormControl('',Validators.compose([Validators.required,Validators.email])),
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('',Validators.required)
  });

  SaveUser(){
    if(this.reactiveform.valid){
      this.service.Registration(this.reactiveform.value).subscribe(item=>{
        this.respdata=item;
        //console.log(this.respdata);
        if(this.respdata.result=='pass'){
          alert("Registered successfully please contact admin for activation")
          this.RedirectLogin();
        }else{
          alert('failed try again')
        }
      });
    }
    
  }

}
