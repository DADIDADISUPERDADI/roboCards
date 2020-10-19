import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll';



class App extends Component{
    constructor(){
        super()
        this.state={
            robots: [],
            searchfiled:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(users=>this.setState({robots: users}));     
    }

    onSearchChange = (event) => {
        this.setState({ searchfiled: event.target.value })     
    }



    render(){
        const {robots, searchfiled} = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfiled.toLowerCase());
        })
        return !robots.length ? 
                <h1>Loading....</h1> :
        (
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <Cardlist robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
                )
        )
            }
        
}


export default App;
