import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'error-handling-example';

  constructor(private appService: AppService){ }

  makeApiCall(){
    this.appService.retrieveJokes();
  }

}
