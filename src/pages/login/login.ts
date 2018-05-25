import { Component } from '@angular/core';
//import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController, NavParams ,ToastController,LoadingController} from 'ionic-angular';
import { DomSanitizer} from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { RestapiService } from '../../providers/restapi-service/restapi-service';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	
   	loading: any;
    users: any;
    url: any;
    userName : any;
    password : any;
    linkUrl  : any;
    domainUrl: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, public restapiService: RestapiService , private sanitizer: DomSanitizer,public loadingCtrl: LoadingController,private iab: InAppBrowser) {
  	/*this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      
    });*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  //////////// for loder ///////////////////
  showLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Wait...'
    });

    this.loading.present();
  }
  /////////////////////////////////////////////
  ngOnInit() {
          this.showLoader();
          //this.domainUrl="https://203.122.46.232/";
          this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://gyanodyan.velocis.in/wps/portal/MobileLogin/"); 
          
          /*
          this.iab.create('http://gyanodyan.velocis.in/wps/portal/MobileLogin/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8ziDY28TTwMvA38DHwtzA0C_X0NvCzNQwwNDEz0wwkpiAJKG-AAjgZA_VGElBTkRhikOyoqAgCVstAx/dz/d5/L2dBISEvZ0FBIS9nQSEh/','_self',{location:'no'});
          */
          setTimeout(() => {
            this.loading.dismiss();
        }, 5000);
      
           
    }
  /////////// click function /////////////////////
  
}
