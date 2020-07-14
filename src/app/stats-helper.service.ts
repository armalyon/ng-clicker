import {Injectable} from '@angular/core';
import {UserResult} from './user-result';

@Injectable({
  providedIn: 'root'
})
export class StatsHelperService {

  private results: UserResult[];

  constructor() {
    this.results = this.getResults();
    console.log(this.results);
  }

  getResults(): UserResult[] {
    const results: UserResult[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key: string = localStorage.key(i);
      if (key.startsWith('result')) {
        results.push(JSON.parse(localStorage.getItem(key)) as UserResult);
      }
    }
    return results;
  }

  clearStats(): void {
    localStorage.clear();
  }

}
