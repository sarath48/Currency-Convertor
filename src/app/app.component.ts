import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'placeLocator';
  inputValue!: number;
  selectedOptionforLeftCurrency: string = 'USD';
  selectedOptionforRightCurrency: string = 'INR';
  currencyTypesForOption1 = ['USD', 'INR', 'JPY', 'EUR', 'CAD', 'KRW'];
  currencyTypesForOption2 = ['INR', 'USD', 'EUR', 'JPY', 'KRW', 'CAD'];

  selectOptionForleftOption(currency: any) {
    if (currency.value !== 'USD') {
      this.selectedOptionforLeftCurrency = currency.value;
    }
  }
  selectOptionForRightOption(currency: any) {
    if (currency.value !== 'INR') {
      this.selectedOptionforRightCurrency = currency.value;
    }
  }

  convertInput() {
    switch (this.selectedOptionforLeftCurrency) {
      case 'USD': {
        switch (this.selectedOptionforRightCurrency) {
          case 'INR': {
            this.inputValue = this.inputValue * 79;
            break;
          }
          case 'JPY': {
            this.inputValue = this.inputValue * 143;
            break;
          }
          case 'EUR': {
            this.inputValue = this.inputValue;
            break;
          }
          case 'CAD': {
            this.inputValue = this.inputValue;
            break;
          }
          case 'KRW': {
            this.inputValue = this.inputValue * 1396;
            break;
          }
          case 'USD': {
            this.inputValue = this.inputValue;
            break;
          }
        }
        break;
      }
      case 'INR': {
        switch (this.selectedOptionforRightCurrency) {
          case 'INR': {
            this.inputValue = this.inputValue;
            break;
          }
          case 'JPY': {
            this.inputValue = this.inputValue;
            break;
          }
          case 'EUR': {
            this.inputValue = this.inputValue * 0.01;
            break;
          }
          case 'CAD': {
            this.inputValue = this.inputValue * 0.01;
            break;
          }
          case 'KRW': {
            this.inputValue = this.inputValue * 17;
            break;
          }
          case 'USD': {
            this.inputValue = this.inputValue * 0.01;
            break;
          }
        }
        break;
      }
    }
  }
}
