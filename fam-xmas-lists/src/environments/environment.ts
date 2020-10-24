// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import * as firebase from 'firebase';

export const environment = {
  production: false,
  firebase :{
    apiKey: "AIzaSyB1w_fd6nY3BzH2T9Av0_0Iiie8k9SdGrw",
    authDomain: "fam-xmas-lists.firebaseapp.com",
    databaseURL: "https://fam-xmas-lists.firebaseio.com",
    projectId: "fam-xmas-lists",
    storageBucket: "fam-xmas-lists.appspot.com",
    messagingSenderId: "843294942763",
    appId: "1:843294942763:web:38e463879c74453a77ec6e"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
