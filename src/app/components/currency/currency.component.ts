import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { Currency } from 'src/app/models/currency.model'
import {
  ADD_ID_TO_FAVORITE_ACTION_TYPE,
  REMOVE_ID_FROM_FAVORITE_ACTION_TYPE,
} from 'src/app/state/app.actions'

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.sass'],
})
export class CurrencyComponent {
  @Input() currency: Currency

  @Input() isFavorite = false

  @Input() showAction = false

  @Input() showPrice = false

  constructor(
    private store: Store,
  ) {}

  addToFavorite() {
    const id: string = this.currency.asset_id
    this.store.dispatch({ type: ADD_ID_TO_FAVORITE_ACTION_TYPE, id })
  }

  removeFromFavorite() {
    const id: string = this.currency.asset_id
    this.store.dispatch({ type: REMOVE_ID_FROM_FAVORITE_ACTION_TYPE, id })
  }
}
