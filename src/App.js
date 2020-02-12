import React, { Component } from 'react'
// import View from './components/view/View.js'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import Product from './components/Custem/Product'

export default class App extends Component {
  

  render() {
    return (
      <Provider store={store}>
        {/* <View/> */}
        <Product/>

      </Provider>


    )
  }
}
