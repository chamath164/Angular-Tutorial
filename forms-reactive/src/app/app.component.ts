import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    console.log(this.signupForm);
  }

  onAddHobby(){
    const control = new FormArray(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
}