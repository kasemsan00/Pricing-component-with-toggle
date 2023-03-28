import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, OnChanges {
  @Input() title: string | undefined;
  @Input() price: number | undefined;
  @Input() storage: string | undefined;
  @Input() user: string | undefined;
  @Input() bandwidth: string | undefined;
  @Input() primary: boolean | undefined;
  @Input() planType: boolean | undefined;
  resultPrice: number | undefined = 0;

  ngOnInit(): void {
    if (this.planType) {
      this.resultPrice = this.price;
      this.resultPrice = this.toFixed(this.resultPrice, 2);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && this.price !== undefined) {
      if (!changes['planType'].currentValue) {
        this.resultPrice = this.price * 10;
        this.resultPrice = this.toFixed(this.resultPrice, 2);
      }
      if (changes['planType'].currentValue) {
        this.resultPrice = this.price;
        this.resultPrice = this.toFixed(this.resultPrice, 2);
      }
    }
  }
  toFixed(num: number | undefined, fixed: number) {
    const re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');
    // @ts-ignore
    return parseFloat(num.toString().match(re)[0]);
  }
}
