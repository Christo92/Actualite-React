import React, { Component } from 'react';

const HeaderMessage = (props) => {
        const { auteur, dataPublication } = props;

        return (
            <div className="HeaderMessage">
                <div className="HeaderMessage__auteur">
                    <img src={ auteur.avatar } alt={`Avatar de ${ auteur.nom }`} />
                    { auteur.nom }
                </div>

                <div className="HeaderMessage__date-publication">
                    { new Date().toLocaleString() }
                </div>
            </div>
        );
}

export default HeaderMessage;