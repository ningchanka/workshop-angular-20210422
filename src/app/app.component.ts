import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo01';
  result = "...";
  username = ""

  onPress(event: any) {
    console.log(event.target.value)
    this.result = event.target.value
  }

  doSth() {
    console.log("Click")
    this.result = "Change from click"
  }
}
