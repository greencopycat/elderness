import React, { Component } from 'react'
// import './App.css'
import { HOSTNAME } from './../../Constant'

class Main extends Component {
  state = {
    wiseword: ''
  }

  componentDidMount = async () => {
    this.getWisewords()
  }

  getWisewords = async () => {
    const { data } = await fetch(`${HOSTNAME.DBDEV}/msapi/get`)
        .then(res => res.json())
        .catch(err=> {
            console.error('[api error] -> ', err)
            return err
        })
    if (data) {
      this.setState({ wiseword: data })
    }
  }

  render() {
    return (
      <div className="universe">
        <div>{this.state.wiseword}</div>
      </div>
    )
  }
}

export default Main
