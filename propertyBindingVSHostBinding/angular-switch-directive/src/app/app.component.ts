import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-switch-directive';

  tab : string = '';

  onInfoClicked() {
    this.tab = 'info';
  }

  onServicesClicked() {
    this.tab = 'services';
  }

  onPrivacyClicked() {
    this.tab = 'privacy';
  }

  onUserAgreementClicked() {
    this.tab = 'user-agreement';
  }
}
