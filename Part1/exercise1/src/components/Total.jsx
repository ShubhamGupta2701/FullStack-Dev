import React from 'react'

const Total = (props) => {
    return (
        <>
            <h3> Total number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</h3>
        </>
    )
}

export default Total