import React from "react";

export const Number = ({
    resource
}) => {
    const number = resource.num.read()
    return (
        <div>The random number is: {number}</div>
    )
}
