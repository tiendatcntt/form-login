import { Component} from '@angular/core';
import { AbstractControl, FormGroup, FormArray, FormControl, Validators } from '../../node_modules/@angular/forms';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent{
  title  = 'form-login';
  /*email: string;
  emailControl: AbstractControl;
  form: FormGroup;

  ngOnInit(){
    this.form=new FormGroup(
      {email: new FormControl('', Validators.compose([Validators.required, Validators.email]))}
    );
    this.emailControl=this.form.controls['email']
  }*/
}
