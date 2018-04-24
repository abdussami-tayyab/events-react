// ./components/Event

import React, { Component } from 'react';

export default class Event extends Component {
    // constructor
    constructor (props) {
        super(props);
    }

    // render
    render () {
        const isComplete = this.props.event.isComplete;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    x
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    x
        // each event
        return (
            <li className="list-group-item">
                <h6 className="d-inline">{this.props.event.title}</h6>

                <div className="btn-group float-right">
                    {isComplete ? (
                            <button className="btn btn-sm btn-warning" onClick={() => this.props.toggleIsComplete(this.props.event.id)}>mark incomplete</button>
                        ) : (
                            <button className="btn btn-sm btn-primary" onClick={() => this.props.toggleIsComplete(this.props.event.id)}>mark complete</button>
                        )
                    }
                    <button className="btn btn-sm btn-danger" onClick={() => this.props.remove(this.props.event.id)}>remove</button>
                </div>
            </li>
        );
    }
}