import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController} from 'ionic-angular';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { VerifyPinPage } from '../verify-pin/verify-pin';
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  model: any = { pin: "", cpin: "" };
  loader: any;
  _user: any;
  pinSetForm: FormGroup;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    private storage: Storage,
    private alertCtrl :AlertController
  ) {
    this.pinSetForm = this.formBuilder.group({
      'pin': ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4), Validators.maxLength(4)])],
      'cpin': ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4)])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
     clear() {
    this.storage.clear().then(() => {
      console.log('all keys cleared');
    });
  }
  setPin() {

    console.log('setpin called');
    console.log(this.model);
    this.loader = this.loadingCtrl.create({
      content: "",
      spinner: 'circles',
      cssClass: 'my-loading-class',
      //enableBackdropDismiss:true
    });
      this.clear();
   // this.loader.present();
    this.storage.set('pin', this.model.pin);
    this.showDialog('Success','Pin Set Successfully!  ');
    this.navCtrl.setRoot(VerifyPinPage);
  }
  showDialog(title: any, body: any) {

    if(this.loader){
       this.loader.dismissAll();
       this.loader = null;
     }
    let confirm = this.alertCtrl.create({
      title: title,
      message: body,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            
          }
        }
      ]
    });
    
    confirm.present();

  }

}
