import {Component, OnInit} from '@angular/core';
import {StatsHelperService} from '../stats-helper.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {

  constructor(private statsHelperService: StatsHelperService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  clearStats(): void {
    this.statsHelperService.clearStats();
    this.router.navigate(['/statistics']);
  }

  newGame(): void {
    this.router.navigate(['/']);

  }

}
