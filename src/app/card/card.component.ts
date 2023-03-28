import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() title: string | undefined;
  @Input() price: string | undefined;
  @Input() storage: string | undefined;
  @Input() user: string | undefined;
  @Input() bandwidth: string | undefined;
  @Input() primary: boolean | undefined;
  @Input() planType: string | undefined;
}
