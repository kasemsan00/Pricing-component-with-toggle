import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Pricing-component-with-toggle';
  planType = true;
  planData = [
    {
      title: 'Basic',
      price: 19.9999,
      storage: '500 GB Storage',
      user: '2 Users Allowed',
      bandwidth: 'Send up to 3 GB',
      primary: false,
    },
    {
      title: 'Professional',
      price: 24.9999,
      storage: '1 TB Storage',
      user: '5 Users Allowed',
      bandwidth: 'Send up to 10 GB',
      primary: true,
    },
    {
      title: 'Master',
      price: 39.9999,
      storage: '2 TB Storage',
      user: '10 Users Allowed',
      bandwidth: 'Send up to 20 GB',
      primary: false,
    },
  ];
  planTypeChange = (event: boolean) => {
    this.planType = event;
  };
}
