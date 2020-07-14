import {Injectable} from '@angular/core';
import {UserResult} from './user-result';
import {AuthService} from './auth.service';
import {CounterService} from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class ResultSaverService {

  constructor(private authService: AuthService,
              private counterService: CounterService) {
  }

  saveResult(): void {
    const currentResultNumber: number = this.getResultsCount() + 1;

    const userResult: UserResult = {
      userName: this.authService.getCurrentUser(),
      result: this.counterService.getNumberOfClicks()
  };
    localStorage.setItem('result' + currentResultNumber, JSON.stringify(userResult));
  }


  private getResultsCount(): number {
    let resultCount = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key: string = localStorage.key(i);
      if (key.startsWith('result')) {
        resultCount++;
      }
    }
    return resultCount;
  }

}

