import React from 'react';

class Contador extends React.Component{
    constructor{
        super();
        this.state = {
            count: 0;
        };
    }
    render(){
        return{
            <h1>{this.state.count}</h1>
        };
    }
}

export default Contador;