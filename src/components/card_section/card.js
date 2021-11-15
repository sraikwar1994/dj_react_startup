import React from "react";

function Card(props) {
    const cards_details = props.cards_details;
    return (
        <>
        {cards_details.map((card) => 
            <div key={card.id} className="col-md-3 col-sm-12">
                <div className="card border-dark mb-3">
                    <div className="card-header">{card.header}</div>
                        <div className="card-body text-dark">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.text}</p>
                    </div>
                </div>
            </div>
        )}
        
        </>
    )
};


export default Card