import { makeAutoObservable } from 'mobx'
import { getCountryByName, ICountryInfo } from '../api/apiService'

class AutocompleteStore {
  countries: ICountryInfo[] = []

  constructor() {
    makeAutoObservable(this)
  }

  setCountries = async (text: string) => {
    const data = await getCountryByName(text)
    this.countries = data
  }
}

export default AutocompleteStore
