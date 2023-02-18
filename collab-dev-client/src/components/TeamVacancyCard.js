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
                {/*<h3 className="team-vacancy-card-requirements-title">Требования:</h3>*/}
                {/*<ul className="team-vacancy-card-requirements-list">*/}
                {/*    {props.requirements.map((requirement, index) => (*/}
                {/*        <li key={index}>{requirement}</li>*/}
                {/*    ))}*/}
                {/*</ul>*/}
                <ul className="team-vacancy-card-stack-list">
                    {props.stack.map((item, index) => (
                        <li className="team-vacancy-card-stack-item" key={index}>{item}</li>
                    ))}
                </ul>
                {/*<a className="team-vacancy-card-chat-link" href={props.chat}>*/}
                {/*    Присоединиться к чату*/}
                {/*</a>*/}
            </div>
        </div>
    );
}

export default TeamVacancyCard;
