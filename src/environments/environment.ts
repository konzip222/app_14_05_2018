// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyDweOwkX6TfGWwmLSENnHh9u8uSyCfY3E4",
    authDomain: "newawsomeapp.firebaseapp.com",
    databaseURL: "https://newawsomeapp.firebaseio.com",
    projectId: "newawsomeapp",
    storageBucket: "newawsomeapp.appspot.com",
    messagingSenderId: "150538647091"
  }
};
