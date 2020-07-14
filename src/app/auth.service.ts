import {Injectable, Input} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: string;

  constructor() {
  }

  public setCurrentUser(userName: string): void {
    this.currentUser = userName;
  }

  private showStoredUsers(): void {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      console.log(`${key}: ${localStorage.getItem(key)}`);
    }
  }

  public getCurrentUser(): string{
    return this.currentUser;
  }

}
