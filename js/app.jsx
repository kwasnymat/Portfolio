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
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
    }

    toggleClass = () => {
        this.setState({
            active: !this.state.active
        });
    };

    handleClickBox = () => {
        this.toggleClass();
    };


    render () {
        const isActive = this.state.active;
        if (!isActive){
            return (
                <div id="navigation">
                    <div id="logo"></div>
                    <HamburgerMenu isActive={isActive} clickMethod={this.handleClickBox} />
                </div>
            );
        } else {
            return (
                <div id="navigation">
                    <div id="logo"></div>
                    <MenuList />
                    <HamburgerMenu isActive={isActive} clickMethod={this.handleClickBox}/>
                </div>
            );
        }
    }
}



class MenuList extends React.Component {
    render(){
        return (
            <div id="navigation">
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/projects">PROJEKTY</Link>
                    </li>
                    <li>
                        <Link to="/">O MNIE</Link>
                    </li>
                    <li>
                        <Link to="/skills">UMIEJĘTNOŚCI</Link>
                    </li>
                    <li>
                        <Link to="/contact">KONTAKT</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

class HamburgerMenu extends React.Component {
    handleClick = () => this.props.clickMethod();
    render () {
        return !this.props.isActive ? <div id="menu"><i className="fas fa-bars" onClick={this.handleClick}></i></div> :
                <div id="menu"><i className="fas fa-times" onClick={this.handleClick}></i></div>
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
        return (
            <div id="contact">
                <div id="gridContact">
                    <div id="mail">
                        <a href="mailto:kwasnymat@gmail.com">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                    <div id="linkedin">
                        <a href="https://linkedin.com/in/mateuszkwasny">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                    <div id="github">
                        <a href="https://github.com/kwasnymat">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                    <div id="phone">
                        <a href="tel: +48668262331">
                            <i className="fas fa-phone"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

class Skills extends React.Component {
    render() {
        return(
            <div id="skills">
                <div id="gridSkills">
                    <div id="html">
                        <i className="fab fa-html5"></i>
                        <p>HTML5</p>
                    </div>
                    <div id="css">
                        <i className="fab fa-css3-alt"></i>
                        <p>CSS3</p>
                    </div>
                    <div id="js">
                        <i className="fab fa-js"></i>
                        <p>JavaScript + ES6</p>
                    </div>
                    <div id="react">
                        <i className="fab fa-react"></i>
                        <p>React</p>
                    </div>
                    <div id="sass">
                        <i className="fab fa-sass"></i>
                        <p>Sass</p>
                    </div>
                    <div id="git">
                        <i className="fab fa-git"></i>
                        <p>Git</p>
                    </div>
                </div>
            </div>
        )
    }
}

class Projects extends React.Component {
    render (){
        return (
            <div>
                Mateusz
            </div>
        )
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
                    <Route path='/projects' component={Projects} />
                    <Route path='/skills' component={Skills} />
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