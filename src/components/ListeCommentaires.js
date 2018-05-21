import React from 'react';
import Commentaire from './Commentaire';
import uniqid from 'uniqid';

const ListeCommentaires = (props) => {

    const { commentaires } = props;

    if(!commentaires.length) {
        return null;
    }

    return (
        <div className="ListeCommentaires">
            {commentaires.map((commentaire) => <Commentaire key={uniqid()} commentaire={ commentaire }/>)}

        </div>
    );
}

export default ListeCommentaires;