import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoadingComponent } from './loading/loading.component';
import { LandingComponent } from './landing/landing.component';
import { RoomselectionComponent } from './roomselection/roomselection.component';
import { PrivateroomcodeComponent } from './privateroomcode/privateroomcode.component';
import { WinscreenComponent } from './winscreen/winscreen.component';
import { ProfileComponent } from './profile/profile.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatComponent } from './chat/chat.component';
import { HelpComponent } from './help/help.component';
import { CreateroomComponent } from './createroom/createroom.component';
import { SettingComponent } from './setting/setting.component';
import { PublicroomcodeComponent } from './publicroomcode/publicroomcode.component';
import { WaitingroomComponent } from './waitingroom/waitingroom.component';

import { CreateprivateroomComponent } from './createprivateroom/createprivateroom.component';
import { JoinroomComponent } from './joinroom/joinroom.component';
import { GameComponent } from './game/game.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LoadingComponent,
    LandingComponent,
    RoomselectionComponent,
    PrivateroomcodeComponent,
    WinscreenComponent,
    ProfileComponent,
    LeaderboardComponent,
    ChatComponent,
    HelpComponent,
    CreateroomComponent,
    SettingComponent,
    PublicroomcodeComponent,
    WaitingroomComponent,
    CreateprivateroomComponent,
    JoinroomComponent,
    GameComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
