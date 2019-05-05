import { Component } from '@angular/core';
import { FingerprintOptions, FingerprintAIOOriginal } from '@ionic-native/fingerprint-aio';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private platform: Platform,
            private fingerprint: FingerprintAIO) {
  }


  check() {
    console.log('check');
    this.fingerprint.isAvailable().then(result => {

      if (result === 'finger' || result === 'face') {
        this.show();
      }

      console.log(result);
    }).catch(err => {
      console.log(err);
    });
  }

  show() {
    console.log('show');
    this.fingerprint.show({
      clientId: 'Fingerprint-Demo',
      clientSecret: 'password',
      disableBackup: true
    }).then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    });
  }
}
