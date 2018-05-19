import React, { Component } from 'react';
import HeaderMessage from './HeaderMessage';

class Actualite extends Component {
    render() {
        const { auteur, dataPublication } = this.props.actualite;

        return (
            <div className="Actualite">
                <HeaderMessage auteur={ auteur } dataPublication={ dataPublication } />
            </div>
        );
    }
}

export default Actualite;