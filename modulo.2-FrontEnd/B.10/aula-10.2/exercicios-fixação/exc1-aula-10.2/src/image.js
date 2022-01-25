import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;

// 1 . Qual o nome do componente declarado acima?
// Image.

// 2. Chame o componente Image , de forma que seja mostrada esta imagem, ou o texto Cute cat staring , caso a imagem não consiga ser carregada.