import React, {Component} from 'react'

export default class Character extends Component{

    render() {

        return(
            <div>
                <img>{Image}</img>
                <h2>{Name}</h2>
            </div>
        )
    }
}