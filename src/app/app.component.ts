import {Component} from '@angular/core';

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

    constructor() {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(position => {
                console.log(position);
            });
        }
    }
}
