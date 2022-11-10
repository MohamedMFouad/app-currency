import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { LOAD_CURRENCIES_ACTION_TYPE } from './state/app.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Currency App'

  constructor(
    private store: Store,
  ) {
    this.store.dispatch({ type: LOAD_CURRENCIES_ACTION_TYPE })
  }
}
