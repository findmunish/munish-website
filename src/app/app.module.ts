import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import { AppRoutingModule } from "./app-routing/app-routing.module";
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireStorageModule } from 'angularfire2/storage';

import { AppComponent } from "./app.component";
import { HeaderModule } from "./views/header/header.module";
import { ReadJsonService } from "./services/read-json.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HeaderModule,
    HttpClientModule,
    // AngularFireModule.initializeApp({
      // apiKey: "<your-api-key>",
      // authDomain: "<your-auth-domain>",
      // storageBucket: "<project-id>.appspot.com",
      // projectId: "<your-project-id>",
    // }),
    //  AngularFireStorageModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [ReadJsonService, DatePipe]
})
export class AppModule {}