import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController} from 'ionic-angular';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

/**
 * Generated class for the VerifyPinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verify-pin',
  templateUrl: 'verify-pin.html',
})
export class VerifyPinPage {

  model: any = { pin: ""};
  loader: any;
  _user: any;
  verifyPinForm: FormGroup;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    private storage: Storage,
    private alertCtrl :AlertController
  ) {
    this.verifyPinForm = this.formBuilder.group({
      'pin': ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4), Validators.maxLength(4)])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyPinPage');
  }
  verifyPin(){
    console.log(this.model.pin);
    let $value;
 this.storage.get('pin').then((val) => {
      $value=val;
});
  console.log($value);
    if(this.model.pin==$value){
      console.log('hhi');
      this.navCtrl.push(HomePage);
    }
  }

}
