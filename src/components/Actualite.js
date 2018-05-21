import React, { Component } from 'react';
import HeaderMessage from './HeaderMessage';
import Message from './Message';
import Reactions from './Reactions';
import ListeCommentaires from './ListeCommentaires';

class Actualite extends Component {
    render() {
        const { auteur, dataPublication, message, reactions, commentaires } = this.props.actualite;
        return (
            <div className="Actualite">
                <HeaderMessage auteur={ auteur } dataPublication={ dataPublication } />
                <Message message={ message }/>
                <Reactions reactions={ reactions }/>
                <ListeCommentaires commentaires={ commentaires }/>
            </div>
        );
    }
}

export default Actualite;