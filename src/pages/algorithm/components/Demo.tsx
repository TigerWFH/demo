import * as React from 'react';


export function Demo(props:any) {
    return <div>
        {
            props.code
        }
        {
            props.demo.name
        }
    </div>
}