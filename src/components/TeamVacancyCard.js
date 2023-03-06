import React from 'react';

function TeamVacancyCard(props) {
    return (
        <div className="team-vacancy-card">
            {/*<div className="team-vacancy-card-image">*/}
            {/*    <img src={props.image} alt={props.title} />*/}
            {/*</div>*/}
            <div className="team-vacancy-card-content">
                <h2 className="team-vacancy-card-title">{props.title}</h2>
                <p className="team-vacancy-card-description">{props.description}</p>
                <ul className="team-vacancy-card-stack-list">
                    {props.stack.map((item, index) => (
                        <li className="team-vacancy-card-stack-item" key={index}>{item}</li>
                    ))}
                </ul>
                {/*<a className="team-vacancy-card-chat-link">*/}
                {/*    {props.type}*/}
                {/*</a>*/}
                <div className="team-vacancy-card-type">
                    #{props.type}
                </div>
            </div>
        </div>
    );
}

export default TeamVacancyCard;
