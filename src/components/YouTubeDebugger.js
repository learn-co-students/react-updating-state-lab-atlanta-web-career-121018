import React from 'react';

class YouTubeDebugger extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            js: {
                errors: [],
                user: null,
                settings: {
                    bitrate: 8,
                    video: {
                        resolution: '1080p'
                    }
                }
            }
        }
    }

    changeBitRate = () => {
        this.setState({
            js: {
                settings: {
                    bitrate: 12
                }
            }
        }, () => console.log(`${this.state.js.settings.bitrate}`));
    }

    changeResolution = () => {
        this.setState({
            js: {
                settings: {
                    video: {
                        resolution: '720p'
                    }
                }
            }
        }, () => console.log(`${this.state.js.settings.video.resolution}`));

        // Or this can be defined using the Object.assign method:

        // this.setState({
        //     settings: Object.assign({}, this.state.settings, {
        //         video: Object.assign({}, this.state.settings.video, {
        //             resolution: '720p'
        //         })
        //     })

    }

    render() {
        return (

            <div>
                <button class='bitrate' onClick={this.changeBitRate} >Bitrate Button</button>
                <button class='resolution' onClick={this.changeResolution} >Resolution Button</button>
            </div>
        )
    }
}

export default YouTubeDebugger;