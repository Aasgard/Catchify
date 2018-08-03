import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {SwUpdate} from '@angular/service-worker';
import {AngularFireAuth} from 'angularfire2/auth';
import {auth} from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public isUserLoggedIn;
    public profilePictureTest = '';
    public isMapViewActivated = false;
    public mapStylerOptions = [
        {
            'featureType': 'poi',
            'stylers': [{'visibility': 'off'}]
        },
        {
            'featureType': 'transit',
            'stylers': [{'visibility': 'off'}]
        }
    ];

    constructor(private snackBar: MatSnackBar, private swUpdate: SwUpdate, private afAuth: AngularFireAuth) {
        // if (navigator.geolocation) {
        //     navigator.geolocation.watchPosition(position => {
        //         snackBar.open('Position géographique changée.', null, {duration: 2000});
        //     });
        // } else {
        //     snackBar.open('Veuillez activer votre géolocalisation.', null, {duration: 2000});
        // }

        // this.swUpdate.available.subscribe(evt => {
        //     console.log(evt);
        // });
    }

    public ngOnInit(): void {
        this.afAuth.auth.onAuthStateChanged(response => {
            if (response && !this.isUserLoggedIn) {
                this.isUserLoggedIn = true;
                this.profilePictureTest = response.photoURL;
            }
        });
    }

    public onLoginButtonClicked(): void {
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }

    public onLogoutButtonClicked(): void {
        this.afAuth.auth.signOut().then(response => {
            this.isUserLoggedIn = false;
            this.snackBar.open('Déconnexion effectuée avec succès.', null, {duration: 2000});
        });
    }
}
