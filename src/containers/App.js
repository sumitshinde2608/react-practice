import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
// import ErrorBoundry from '../components/ErrorBoundry.js';
import './App.css';

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            robots: [] ,
            searchfeild: '',
        } 
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}))
    }

    onSearchChange = (event) => {
        this.setState({ searchfeild: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return (robot.name.toLowerCase()).includes(this.state.searchfeild.toLowerCase());
        })
    return (
        <div className = 'tc' >
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
            <CardList robots={filteredRobots}/>
        </Scroll>
        </div>
        );
    }
}

export default App;
