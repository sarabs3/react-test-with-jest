import React from 'react';

export default class SearchField extends React.Component {
    constructor() {
        super()
        this.state = {
            search:''
        }
    }

    onChange = (e) => {
        this.setState({search:e.target.value});
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.onChange} value={this.state.search}  />
                <p>{this.state.search}</p>
            </div>
        )
    }
}