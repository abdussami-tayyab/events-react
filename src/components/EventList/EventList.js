// ./components/EventList

import React, { Component } from 'react';
import Event from '../Event/Event';

export default class EventList extends Component {
    // constructor
    constructor (props) {
        super(props);

        this.state = {
            events: props.events,
        }
    }

    // render
    render () {
        // fetch all events
        let allEvents = this.state.events.map((event) => {
            return (
                <Event
                    key={event.id}
                    event={event}
                    toggleIsComplete={this.toggleIsComplete.bind(this)}
                    remove={this.remove.bind(this)}
                />);
        });

        // fetch only completed events
        let completedEvents = this.state.events.map((event) => {
            if (event.isComplete) {
                return (
                    <Event
                        key={event.id}
                        event={event}
                        toggleIsComplete={this.toggleIsComplete.bind(this)}
                        remove={this.remove.bind(this)}
                    />
                )
            }
        });

        // fetch only incompleted events
        let incompletedEvents = this.state.events.map((event) => {
            if (! event.isComplete) {
                return (
                    <Event
                        key={event.id}
                        event={event}
                        toggleIsComplete={this.toggleIsComplete.bind(this)}
                        remove={this.remove.bind(this)}
                    />
                )
            }
        });

        return (
            <div>
                <div className="all-events">
                    <h6>All Events</h6>
                    <ul className="list-group">{allEvents}</ul>
                </div>
                <div className="incomplete-events my-4">
                    <h6>Incomplete Events</h6>
                    <ul className="list-group">{incompletedEvents}</ul>
                </div>
                <div className="completed-events">
                    <h6>Completed Events</h6>
                    <ul className="list-group">{completedEvents}</ul>
                </div>
            </div>
        );
    }

    // toggle complete event
    toggleIsComplete(id) {
        const newState = this.state;
        const index = newState.events.findIndex(event => event.id === id);

        // index out of bounds
        if (index === -1)
            return;

        // else
        newState.events[index].isComplete = !newState.events[index].isComplete;

        this.setState(newState);
    }

    // remove Event
    remove(id) {
        const newState = this.state;
        const index = newState.events.findIndex(event => event.id === id);

        // index out of bounds
        if (index === -1)
            return;

        // else
        newState.events.splice(index, 1);

        this.setState(newState);
    }
}