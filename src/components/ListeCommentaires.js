import React from 'react';
import Commentaire from './Commentaire';

const ListeCommentaires = (props) => {

    const { commentaires } = props;

    if(!commentaires.length) {
        return null;
    }

    return (
        <div className="ListeCommentaires">
            {commentaires.map((commentaire) => <Commentaire commentaire={ commentaire }/>)}

        </div>
    );
}

export default ListeCommentaires;