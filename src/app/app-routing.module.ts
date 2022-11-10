import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FavoritesComponent } from './components/favorites/favorites.component'
import { HomeComponent } from './components/home/home.component'

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
