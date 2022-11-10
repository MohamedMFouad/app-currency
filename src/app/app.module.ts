import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'

import { StoreModule } from '@ngrx/store'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { reducer } from './state/app.reducer'
import { AppEffects } from './state/app.effect'
import { HomeComponent } from './components/home/home.component'
import { FavoritesComponent } from './components/favorites/favorites.component'
import { SearchFormComponent } from './components/search-form/search-form.component'
import { CurrenciesListComponent } from './components/currencies-list/currencies-list.component'
import { CurrencyComponent } from './components/currency/currency.component'

const MATERIAL_MODULES = [
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    SearchFormComponent,
    CurrenciesListComponent,
    CurrencyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ reducer }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([AppEffects]),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MATERIAL_MODULES,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
