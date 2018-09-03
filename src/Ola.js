import React from 'react';

class Ola extends React.Component {
    render(){
        return (
           <h1>Olá, {this.props.text}</h1>
        );
    }
}

export default Ola;