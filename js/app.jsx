import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
    Route,
    Link,
    IndexRoute,
    hashHistory
} from 'react-router';

class Template extends React.Component {
    render() {
        return <div>
            <Navigation />
            {this.props.children}
       </div>;
    }
}
class Navigation extends React.Component {
    render (){
        return (
            <div id="navigation">
                <h1>Mateusz Kwasny</h1>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/">PROJEKTY</Link>
                    </li>
                    <li>
                        <Link to="/">O MNIE</Link>
                    </li>
                    <li>
                        <Link to="/">UMIEJĘTNOŚCI</Link>
                    </li>
                    <li>
                        <Link to="/contact">KONTAKT</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

class Main extends React.Component {
    render() {
        return (
            <div id="home">
                <p>Junior Front-end Developer</p>
                <Sentence text="Looking for his first job as a programmer."/>
            </div>
        )
    }
}

class Sentence extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            length: 1
        };
    }
    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({length: this.state.length + 1});

            if(this.state.length >= this.props.text.length) {
                clearInterval(this.intervalId);
            }
        }, 200);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <p>{this.props.text.substr(0, this.state.length)}</p>
        )
    }
}

class Contact extends React.Component {
    render() {
        return <h1>Zapraszam do kontaktu</h1>;
    }
}

class NotFound extends React.Component {
    render() {
        return <h1>404, Nothing is here</h1>;
    }
}

class App extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Template}>
                    <IndexRoute component={Main} />
                    <Route path='/contact' component={Contact} />
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});