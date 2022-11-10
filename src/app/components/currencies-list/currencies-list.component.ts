import { Component, Input } from '@angular/core'
import { Currency } from 'src/app/models/currency.model'

@Component({
  selector: 'app-currencies-list',
  templateUrl: './currencies-list.component.html',
  styleUrls: ['./currencies-list.component.sass'],
})
export class CurrenciesListComponent {
  @Input() currencies: Currency[] = []

  @Input() isFavoriteList = false

  @Input() showAction = false

  @Input() showPrice = false
}
