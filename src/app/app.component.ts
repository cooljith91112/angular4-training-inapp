import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'inapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inapp';
  public name: string;
  public tododata: string;

  constructor(private httpClient: HttpService) {
    this.name = 'Inapp';
    this.tododata = 'Some Data';
  }

  postMyData() {
    // console.log(this.name, this.tododata)
    const mydata = {
      name: this.name,
      todo: this.tododata
    };

    this.httpClient.postData(JSON.stringify(mydata)).subscribe(
      (response) => {
        console.log(response);

      },
      (error) => {

      }
    );
  }

}
