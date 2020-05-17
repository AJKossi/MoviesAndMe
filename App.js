import React from 'react'
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import { persistStore } from 'redux-persist'

export default class App extends React.Component {
  render() {
    let persistor = persistStore(Store)
    return (
      <Provider store={Store}>
        <Navigation />
      </Provider>
    )
  }
}
