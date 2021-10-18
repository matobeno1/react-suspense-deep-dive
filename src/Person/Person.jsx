import React from "react";

export const Person = ({
    resource
}) => {
    const person = resource.person.read();
    return (
        <div>
            <p>First name: {person.name.first}</p>
        </div>
    )
}
