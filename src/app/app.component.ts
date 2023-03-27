import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Pricing-component-with-toggle';
  planData = [
    {
      title: 'Basic',
      price: '199.99',
      storage: '500 GB Storage',
      user: '2 Users Allowed',
      bandwidth: 'Send up to 3 GB',
    },
    {
      title: 'Professional',
      price: '249.99',
      storage: '1 TB Storage',
      user: '5 Users Allowed',
      bandwidth: 'Send up to 10 GB',
    },
    {
      title: 'Master',
      price: '399.99',
      storage: '2 TB Storage',
      user: '10 Users Allowed',
      bandwidth: 'Send up to 20 GB',
    },
  ];
}
