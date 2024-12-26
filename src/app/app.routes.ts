import {RouterModule, Routes} from '@angular/router';
import {InterfaceComponent} from './components/interface/interface.component';
import {GameComponent} from './components/game/game.component';
import {NgModule} from '@angular/core';

export

const routes: Routes = [
  { path: '', component: InterfaceComponent },
  { path: 'game', component: GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
