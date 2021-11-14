import React from "react";
import Card from './card'; 

function Cards(props) {
    return (
        <div className="container py-3">
            <div className="row">
                    <Card cards_details={props.cards_details} />
            </div> 
        </div>
    )
};

export default Cards;