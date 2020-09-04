import React, { Component } from 'react';

class ErrorBoundry extends Component {
constuctor(props) {
    super(props);
    this.state = {
        hasError : false
    }
}

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

render(){
    if(this.state.hasError){
        return <h1>Ooops! Not Good. Contact Developer</h1>
    }
    return this.props.children;
}
}

export default ErrorBoundry;