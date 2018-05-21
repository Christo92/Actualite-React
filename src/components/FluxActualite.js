import React, { Component } from 'react';
import Actualite from './Actualite';

class FluxActualite extends Component {
    render() {
        const { actualites } = this.props;
        
        return (
            <div className="FluxActualite">
                { actualites.map((actualite) => <Actualite key={actualite.id} actualite={ actualite } />) }
            </div>
        );
    }
}

export default FluxActualite;