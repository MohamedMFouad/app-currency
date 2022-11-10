import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Currency } from 'src/app/models/currency.model'
import { LOAD_CURRENCIES_ACTION_TYPE } from 'src/app/state/app.actions'
import { selectFavoriteCurrencies } from 'src/app/state/app.selector'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.sass'],
})
export class FavoritesComponent implements OnInit {
  favorites$: Observable<Currency[]> = this.store.select(selectFavoriteCurrencies)

  constructor(
    private store: Store,
  ) {}

  ngOnInit() {
    this.store.dispatch({ type: LOAD_CURRENCIES_ACTION_TYPE })
  }
}
