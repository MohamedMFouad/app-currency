import { Component, OnInit } from '@angular/core'

import { Store } from '@ngrx/store'

import { Observable } from 'rxjs'

import { Currency } from 'src/app/models/currency.model'
import {
  selectFavoriteCurrenciesFiltered,
  selectLoading,
  selectNonFavoriteCurrenciesFiltered,
} from 'src/app/state/app.selector'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  favorites$: Observable<Currency[]> = this.store.select(selectFavoriteCurrenciesFiltered)

  currencies$: Observable<Currency[]> = this.store.select(selectNonFavoriteCurrenciesFiltered)

  loading$: Observable<boolean> = this.store.select(selectLoading)

  constructor(
    private store: Store,
  ) {}

  ngOnInit(): void {
    // TODO: the load is blocks too much this page, for this example I'll implement it in AppComponent
    // this.store.dispatch({ type: LOAD_CURRENCIES_ACTION_TYPE })
  }
}
