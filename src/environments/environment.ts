// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBNNSTu-yf0X4pJnUwmkGp_AS1yB9vBaH8',
    authDomain: 'catchify-211809.firebaseapp.com',
    databaseURL: 'https://catchify-211809.firebaseio.com',
    projectId: 'catchify-211809',
    storageBucket: 'catchify-211809.appspot.com',
    messagingSenderId: '116303367466'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
