import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController} from 'ionic-angular';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataServiceProvider } from '../../providers/data-service/data-service';
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage{
  schools :any;
  retData:any;
  model: any = {};
  studentRegForm :FormGroup;

constructor(private dataprovider:DataServiceProvider,private formBuilder :FormBuilder) {
  this.studentRegForm = this.formBuilder.group({
    'school': ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4), Validators.maxLength(4)])],
    'pin': ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4), Validators.maxLength(4)])],
    'cpin': ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4)])]
  });
}
ionViewDidLoad() {
  console.log('ionViewDidLoad RegisterPage');
  this.getSchool();


}
getSchool(): void {
    
  this.dataprovider.getSchools()
      .subscribe(
         result =>{ this.retData = result;
            this.schools=this.retData.data;
        },
          error => console.log("Error :: " + error),
      )
}
}
