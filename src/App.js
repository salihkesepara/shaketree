import Home from 'src/views/Home'
import { Provider } from 'react-redux'
import configureStore from 'src/store/configureStore'

const store = configureStore()

function App () {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App
