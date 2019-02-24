import React from 'react'

class DigitalClicker extends React.Component {
  state = {
    timesClicked: 0
  }


  handleClick = () => {
    let newTime = ++this.state.timesClicked
    this.setState({
      timesClicked: newTime
    })
  }


  render(){
    return(
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }



}


export default DigitalClicker
