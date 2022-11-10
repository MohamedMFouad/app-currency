import { createReducer, on } from '@ngrx/store'
import {
  addIdToFavorite,
  filterCurrencyByName,
  loadCurrencies,
  loadCurrenciesError,
  loadCurrenciesSuccess,
  loadFavoritesFromStorage,
  removeIdFromFavorite,
  saveFavoritesToStorage,
} from './app.actions'

const initialState = {
  currencies: [],
  favoriteIds: [],
  searchTerm: '',
  loading: false,
  error: false,
}

export const reducer = createReducer(
  initialState,
  on(loadCurrencies, state => ({ ...state, loading: true, error: false })),
  on(loadCurrenciesSuccess, (state, { currencies }) => ({
    ...state, loading: false, error: false, currencies: [...currencies],
  })),
  on(loadCurrenciesError, state => ({ ...state, loading: false, error: true })),
  on(addIdToFavorite, (state, { id }) => ({ ...state, favoriteIds: [...state.favoriteIds, id] })),
  on(removeIdFromFavorite, (state, { id }) => ({
    ...state, favoriteIds: state.favoriteIds.filter(favId => favId !== id),
  })),
  on(filterCurrencyByName, (state, { searchTerm }) => ({
    ...state, searchTerm,
  })),
  on(saveFavoritesToStorage, state => ({
    ...state,
  })),
  on(loadFavoritesFromStorage, state => ({
    ...state,
  })),
)
