import React from "react"

export const PeopleCard = ({ people }) => {
    return (
        <div className="card">
            <h3>{ people.name}</h3>
            <p>Gender - { people.gender }</p>
            <p>Birth Year - { people.birth_year }</p>
        </div>
    );
};