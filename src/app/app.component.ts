import { Component, VERSION } from "@angular/core";
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  constructor(private afStorage: AngularFireStorage) { }
}