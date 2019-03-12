import React, {Component} from 'react';

class Cell extends Component {
  constructor (props){
    super(props)
    this.state = {
      color: this.props.value
    }
  }

}

export default Cell
