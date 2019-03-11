import React from 'react';

class YouTubeDebugger extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            timesClicked: 0
        }
    }

    addClickNums = () => {
        const addNum = (this.state.timesClicked + 1)
        this.setState({
            timesClicked: addNum
        }, () => console.log(`Clicked ${this.state.timesClicked} Times...`));
    }

    // addClickNums = () => {
        // this.setState(prevState => ({
            // timesClicked: prevState.timesClicked + 1
        // }))
    // }

    render() {
        return (

            <button onClick={this.addClickNums} >{this.state.timesClicked}</button>
        )
    }
}

export default YouTubeDebugger;