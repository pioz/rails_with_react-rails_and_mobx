import React from 'react'
import PropTypes from 'prop-types'
import {observer} from 'mobx-react'
import Store from '../stores/Store.js'
import Hello from './Hello.jsx'

@observer
export default class App extends React.Component {

  render() {
    return(<Hello store={new Store(this.props)}/>)
  }

}