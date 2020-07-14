import { Component, OnInit } from '@angular/core';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
  }

  getResult(): string {
    return 'Your result is ' + this.counterService.getNumberOfClicks() + ' clicks!';
  }

}
