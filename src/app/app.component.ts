import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {SwUpdate} from '@angular/service-worker';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

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

    constructor(private snackBar: MatSnackBar, private swUpdate: SwUpdate) {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(position => {
                snackBar.open('Position géographique changée.', null, {duration: 2000});
                console.log(position);
            });
        } else {
            snackBar.open('Veuillez activer votre géolocalisation.', null, {duration: 2000});
        }

        this.swUpdate.available.subscribe(evt => {
           console.log(evt);
        });
    }
}
