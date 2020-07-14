import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private numberOfClicksCounter: number;

  constructor() {
  }

   incrementNumberOfClick(): void {
    this.numberOfClicksCounter++;
  }

   resetCounter(): void {
    this.numberOfClicksCounter = 0;
  }

   getNumberOfClicks(): number {
    return this.numberOfClicksCounter;
  }

}
