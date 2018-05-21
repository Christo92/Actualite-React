import React, { Component } from 'react';
import { reactionEmojis } from '../actualites';
import classNames from 'classnames';

class Reactions extends Component {

    constructor(props){
        super(props);
        this.state = { reactionType: null };
    }

    selectReaction(reactionType) {
        this.setState({ reactionType })
    }

    renderReaction([reactionType, compteur]) {
        const isSelectionReaction = (this.state.reactionType === reactionType);

        if(isSelectionReaction) {
            compteur++;
        }

        return (
            <div 
            className={classNames(
                'Reactions__reaction',
                { 'Reactions__reaction--selected' : isSelectionReaction } 
            )}
            onClick={(e) => this.selectReaction(reactionType)}
            >
                { reactionEmojis[reactionType] } { compteur }
            </div>
        );
    }

    render() {

        const { reactions } = this.props;

        return(
            <div className="Reactions">
                {Object.entries(reactions).map((reaction) => this.renderReaction(reaction))}
            </div>
        );
    }
}

export default Reactions;