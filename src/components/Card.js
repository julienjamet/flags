import React from "react";

const Card = (props) => {
    console.log(props);
    return (
        <li className="card">

            <div className="infos">
                <h2>Nom du pays</h2>
            </div>
        </li>
    );
};

export default Card;