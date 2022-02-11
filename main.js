/*
https://console.cloud.google.com/apis/credentials?project=webapitesty
https://developers.google.com/identity/sign-in/web/sign-in
*/
window.addEventListener("load", function(){
  document.getElementById('time').innerHTML = new Date().toString();  
});
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}
function getGProfile(){
  var auth2 = gapi.auth2.getAuthInstance();
  var profile = auth2.currentUser.get().getBasicProfile();
  console.log(profile.getName());
  console.log(profile.getEmail());
}
function renderButton() {
  gapi.signin2.render('g-signin2', {
    'scope': 'profile email',
    'width': 240,
    'height': 50,
    'longtitle': true,
    'theme': 'dark',
    'onsuccess': onSuccess,
    'onfailure': onFailure
  });
}

var auth2;
var initClient = function() {
  gapi.load('auth2', function(){

    auth2 = gapi.auth2.init({
        client_id: '177667034415-t8vqvkre632s7lvpr6edfjilgbm0m3vb.apps.googleusercontent.com'
    });

    auth2.attachClickHandler('signin-button', {}, onSuccess, onFailure);
  });
};