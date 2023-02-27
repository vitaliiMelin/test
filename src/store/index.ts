import { injectStores } from '@mobx-devtools/tools'
import AutocompleteStore from './autocompleteStore'
import InputStore from './inputStore'

const autocompleteStore = new AutocompleteStore()
const inputStore = new InputStore()

injectStores({
  autocompleteStore,
  inputStore,
})

export { autocompleteStore, inputStore }
