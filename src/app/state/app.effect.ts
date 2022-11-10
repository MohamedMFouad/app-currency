import { Injectable } from '@angular/core'

import { of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'

import { Actions, createEffect, ofType } from '@ngrx/effects'

import { CurrencyService } from '../services/currency.service'
import * as Action from './app.actions'
import { StorageService } from '../services/storage.service'

@Injectable()
export class AppEffects {
    loadCurrencies$ = createEffect(() => this.actions$.pipe(
      ofType(Action.LOAD_CURRENCIES_ACTION_TYPE),
      mergeMap(() => this.currencyService.getAll().pipe(
        map(currencies => ({ type: Action.LOAD_CURRENCIES_SUCCESS_ACTION_TYPE, currencies })),
        catchError(() => of({ type: Action.LOAD_CURRENCIES_ERROR_ACTION_TYPE })),
      )),
    ))

    // TOD: Load and save from storage the favoriteIds when needed
    loadFavoriteIds$ = createEffect(() => this.actions$.pipe(
      ofType(Action.LOAD_FAVORITES_FROM_STORAGE),
      mergeMap(() => this.storageService.getFavoriteIds().pipe(
        map(favoriteIds => ({ type: Action.LOAD_FAVORITES_FROM_STORAGE_SUCCESS, favoriteIds })),
      )),
    ))

    saveFavoriteIds$ = createEffect(() => this.actions$.pipe(
      ofType(Action.SAVE_FAVORITES_TO_STORAGE),
      mergeMap(action => this.storageService.saveFavoriteIds(action).pipe(
        map(() => ({ type: Action.LOAD_FAVORITES_FROM_STORAGE })),
      )),
    ))

    constructor(
        private actions$: Actions,
        private currencyService: CurrencyService,
        private storageService: StorageService,
    ) {}
}
