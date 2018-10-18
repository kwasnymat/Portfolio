import React from 'react';



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
                        <Link to="/">PROJEKTY</Link>
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


export default Navigation;
