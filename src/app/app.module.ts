import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { InterfaceComponent } from './components/interface/interface.component';
import { ScoreComponent } from './components/score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    InterfaceComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule, // BrowserModule already includes CommonModule
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
