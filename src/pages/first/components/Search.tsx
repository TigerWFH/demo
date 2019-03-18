import * as React from 'react';

export default function Search(props) {
    console.log("stateless component==========>Search");
    return (
        <div>
            {
                `search: ${props.name}`
            }
        </div>
    )
}