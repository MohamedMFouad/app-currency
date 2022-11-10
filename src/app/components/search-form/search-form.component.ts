import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Store } from '@ngrx/store'
import { FILTER_CURRENCY_BY_NAME_ACTION_TYPE } from 'src/app/state/app.actions'

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.sass'],
})
export class SearchFormComponent implements OnInit {
  searchControl: FormControl = new FormControl('')

  constructor(
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.searchControl.valueChanges.subscribe(
      searchTerm => {
        this.store.dispatch({ type: FILTER_CURRENCY_BY_NAME_ACTION_TYPE, searchTerm })
      },
    )
  }

  clearSearch(): void {
    this.searchControl.patchValue('')
  }
}
