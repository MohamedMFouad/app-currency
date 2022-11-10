import { createAction, props } from '@ngrx/store'

export const LOAD_CURRENCIES_ACTION_TYPE = '[HOME|FAVORITE Page] Load Currencies'
export const LOAD_CURRENCIES_SUCCESS_ACTION_TYPE = '[Currency API] Loaded Currencies Correctly'
export const LOAD_CURRENCIES_ERROR_ACTION_TYPE = '[Currency API] Error Loading Currencies'
export const ADD_ID_TO_FAVORITE_ACTION_TYPE = '[HOME Page] Add Id to Favorites'
export const REMOVE_ID_FROM_FAVORITE_ACTION_TYPE = '[FAVORITES Page] Remove Id from Favorites'
export const FILTER_CURRENCY_BY_NAME_ACTION_TYPE = '[HOME Page] Filter Currencies by Name'
export const SAVE_FAVORITES_TO_STORAGE = '[HOME|FAVORITES Page] Save Favorites ids to storage'
export const LOAD_FAVORITES_FROM_STORAGE = '[HOME|FAVORITES Page] load Favorites ids from storage'
export const LOAD_FAVORITES_FROM_STORAGE_SUCCESS = '[HOME|FAVORITES Page] loaded Favorites ids from storage'

export const loadCurrencies = createAction(LOAD_CURRENCIES_ACTION_TYPE)
export const loadCurrenciesSuccess = createAction(LOAD_CURRENCIES_SUCCESS_ACTION_TYPE, props<{currencies}>())
export const loadCurrenciesError = createAction(LOAD_CURRENCIES_ERROR_ACTION_TYPE)
export const addIdToFavorite = createAction(ADD_ID_TO_FAVORITE_ACTION_TYPE, props<{id}>())
export const removeIdFromFavorite = createAction(REMOVE_ID_FROM_FAVORITE_ACTION_TYPE, props<{id}>())
export const filterCurrencyByName = createAction(FILTER_CURRENCY_BY_NAME_ACTION_TYPE, props<{searchTerm}>())
export const saveFavoritesToStorage = createAction(SAVE_FAVORITES_TO_STORAGE, props<{favoriteIds}>())
export const loadFavoritesFromStorage = createAction(LOAD_FAVORITES_FROM_STORAGE)
export const loadFavoritesFromStorageSuccess = createAction(LOAD_FAVORITES_FROM_STORAGE, props<{favoriteids}>())
