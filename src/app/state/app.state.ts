import { Currency } from '../models/currency.model'

export interface AppState {
    currencies: ReadonlyArray<Currency>;
    favoriteIds: ReadonlyArray<string>;
    searchTerm: string;
    loading: boolean;
    error: boolean;
}
