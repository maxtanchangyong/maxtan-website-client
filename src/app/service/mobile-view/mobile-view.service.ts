import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileViewService {

  public isMobileView = new BehaviorSubject(false);

  setMobileView() {
    this.isMobileView.next(true);
  }

  setDesktopView() {
    this.isMobileView.next(false);
  }
}
