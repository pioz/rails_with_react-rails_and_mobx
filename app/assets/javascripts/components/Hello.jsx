import React from 'react'
import PropTypes from 'prop-types'
import {observer} from 'mobx-react'

@observer
export default class Hello extends React.Component {

  render() {
    const store = this.props.store
    return(
      <div>
        <input onChange={this.onChange}/>
        { store.text }
      </div>
    )
  }

  onChange = (event) => {
    const store = this.props.store
    store.changeText(event.target.value)
  }

}