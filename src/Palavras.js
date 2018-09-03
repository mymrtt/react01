import React from 'react';

class Palavras extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: '',
            palavrasMenoresOuIguaisA5: [],
            palavrasMaioresQue5: []
        }
        this.changeTextarea = this.changeTextarea.bind(this);
        this.manipularClique_separarPalavras = this.manipularClique_separarPalavras.bind(this);
    }
    changeTextarea(event){
        this.setState({ text: event.target.value });
    }
    manipularClique_separarPalavras(event){
        console.log(event);

        let pedacosDeTexto = this.state.text.split(' ');
        let palavras = pedacosDeTexto.map(function(item){
            return item.replace(".", "").replace(",", "");
        });
        
        this.setState( { palavrasMenoresOuIguaisA5: palavras.filter( item => item.length <= 5 ) } );
        this.setState( { palavrasMaioresQue5: palavras.filter( item => item.length > 5 ) } );
        console.log(this.state);
    }
    render(){
        console.log(this.state)
        let template = <div>
            <textarea onChange={this.changeTextarea}></textarea><br />
            <button onClick={ this.manipularClique_separarPalavras }>CLIQUE AQUI</button>
            <h3>palavrasMenoresOuIguaisA5</h3>
            <ul>
                {this.state.palavrasMenoresOuIguaisA5.map(
                    item => <li>{item}</li>
                )}
            </ul>
            <h3>palavrasMaioresQue5</h3>
            <ul>
                {this.state.palavrasMaioresQue5.map (
                    item => <li>{item}</li>
                )}
            </ul>
        </div>;

        return template;
    }
}

export default Palavras; 