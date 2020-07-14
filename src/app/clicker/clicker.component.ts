import {Component, OnInit, ViewChild} from '@angular/core';
import {CounterService} from '../counter.service';
import {CountdownComponent, CountdownConfig, CountdownEvent} from 'ngx-countdown';
import {Router} from '@angular/router';
import {ResultSaverService} from '../result-saver.service';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})

export class ClickerComponent implements OnInit {
  @ViewChild('cd') private countdown: CountdownComponent;

  config: CountdownConfig = {leftTime: 10};

  constructor(private counterService: CounterService,
              private resultSaverService: ResultSaverService,
              private router: Router) {
    this.counterService.resetCounter();
  }

  ngOnInit(): void {
  }

  addClick(): void {
    this.counterService.incrementNumberOfClick();
  }

  onEvent($event: CountdownEvent): void {
    const leftTime: number = $event.left;
    if (leftTime === 0) {
      this.resultSaverService.saveResult();
      this.router.navigate(['/statistics']);
    }
  }
}
