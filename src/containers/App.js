// ./components/App

import React, { Component } from 'react';
import EventList from '../components/EventList/EventList';

const events = [
    {
        id: 1,
        title: 'First Event',
        description: 'First Description',
        isComplete: false
    },
    {
        id: 2,
        title: 'Second Event',
        description: 'Second Description',
        isComplete: true
    },
    {
        id: 3,
        title: 'Third Event',
        description: 'Third Description',
        isComplete: true
    },
    {
        id: 4,
        title: 'Fourth Event',
        description: 'Fourth Description',
        isComplete: false
    },
    {
        id: 5,
        title: 'Fifth Event',
        description: 'Fifth Description',
        isComplete: false
    }
];

class App extends Component {
    render () {
        return (
            <div>
                {/* header */}
                <header className="bg-light p-3">
                    <h3>To-Do List</h3>
                </header>
                {/* ./header */}

                {/* main */}
                <div className="container my-5">
                    <div className="row">
                        <div className="col-6">
                            <h3>Events List</h3>
                            <EventList events={events} />
                        </div>
                    </div>
                </div>
                {/* ./main */}

                {/* footer*/}
                <footer className="bg-light p-3">
                    <h4 className="d-inline">&copy; Sample Project</h4> - please visit <a href="https://github.com/abdussami-tayyab/todo-js">https://github.com/abdussami-tayyab/todo-js</a>
                </footer>

                {/* ./footer*/}
            </div>
        )
    }
}

export default App;