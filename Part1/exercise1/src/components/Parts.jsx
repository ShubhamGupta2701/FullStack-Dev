import React from 'react'

const Parts = (props) => {
    return (
        <>
            <h2>
                name : {props.name}
            </h2>

            <h4>
                Number of Exercises :  {props.exercises}
            </h4>            
        </>
    )
}

export default Parts