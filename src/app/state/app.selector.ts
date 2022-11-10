import { createSelector } from '@ngrx/store'
import { Currency } from '../models/currency.model'

export const selectCurrencies = state => state.reducer.currencies
export const selectFavoriteIds = state => state.reducer.favoriteIds
export const selectLoading = state => state.reducer.loading
export const selectError = state => state.reducer.error
export const selectSearchTerm = state => state.reducer.searchTerm

export const selectFavoriteCurrencies = createSelector(
  selectCurrencies,
  selectFavoriteIds,
  (selectedCurrencies, selectedFavoriteIds) => {
    if (selectedCurrencies && selectedFavoriteIds) {
      return selectedCurrencies.filter(currency => selectedFavoriteIds.indexOf(currency.asset_id) !== -1)
    }
    return []
  },
)

export const selectNonFavoriteCurrencies = createSelector(
  selectCurrencies,
  selectFavoriteIds,
  (selectedCurrencies, selectedFavoriteIds) => {
    if (selectedCurrencies && selectedFavoriteIds) {
      return selectedCurrencies.filter(currency => selectedFavoriteIds.indexOf(currency.asset_id) === -1)
    }
    return selectedCurrencies
  },
)

export const selectNonFavoriteCurrenciesFiltered = createSelector(
  selectCurrencies,
  selectFavoriteIds,
  selectSearchTerm,
  (selectedCurrencies: Currency[], selectedFavoriteIds: string[], selectedSearchTerm: string) => {
    if (selectedCurrencies && selectedFavoriteIds) {
      return selectedCurrencies
        .filter(currency => selectedFavoriteIds.indexOf(currency.asset_id) === -1)
        .filter(currency => currency.name?.toLocaleLowerCase().includes(selectedSearchTerm?.toLocaleLowerCase()))
    }
    return selectedCurrencies
  },
)

export const selectFavoriteCurrenciesFiltered = createSelector(
  selectCurrencies,
  selectFavoriteIds,
  selectSearchTerm,
  (selectedCurrencies: Currency[], selectedFavoriteIds: string[], selectedSearchTerm: string) => {
    if (selectedCurrencies && selectedFavoriteIds) {
      return selectedCurrencies
        .filter(currency => selectedFavoriteIds.indexOf(currency.asset_id) !== -1)
        .filter(currency => currency.name?.toLocaleLowerCase().includes(selectedSearchTerm?.toLocaleLowerCase()))
    }
    return []
  },
)
