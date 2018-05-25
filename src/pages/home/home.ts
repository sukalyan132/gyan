import { Component } from '@angular/core';
import { NavController ,NavParams ,LoadingController} from 'ionic-angular';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	url: any;
	userName : any;
	password : any;
  linkUrl  : any;
  domainUrl: any;
  constructor(public navCtrl: NavController , private sanitizer: DomSanitizer, public navParams: NavParams,public loadingCtrl: LoadingController) {

  }
  //////////// for loadr ///////////////////
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }

  ///////////////////////////////////////////////
  ngOnInit() {
      this.presentLoadingDefault();
     // this.domainUrl="https://203.122.46.232/";
     this.domainUrl="https://192.168.100.180/";
      if(!this.navParams.get("linkUrl"))
      {
          this.userName  = this.navParams.get("userName");
          this.password  = this.navParams.get("password");
          console.log(this.userName);
          this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.domainUrl+"wps/portal/cxml/04_SD9ePMtCP1I800I_KydQvyHFUBADPmuQy?userid="+this.userName+"&password="+this.password+""); 
      }
      else
      {
          this.linkUrl  = this.navParams.get("linkUrl");
          console.log(this.linkUrl);
          this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.domainUrl+this.linkUrl); 
      }
  		     
    }

}
