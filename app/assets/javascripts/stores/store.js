import {observable} from 'mobx'

export default class Store {
  
  @observable text = 'Heeyyy'

  constructor(props = {}) {
    this.text = props.text
  }

  changeText(text) {
    this.text = text
  }

}
