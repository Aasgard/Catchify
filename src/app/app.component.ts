import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
}
