import React from 'react'
import Parts from './Parts'

const Content = (props) => {
    return (
        <>
            <Parts name = {props.part1} exercises = {props.exercises1}/>
            <Parts name = {props.part2} exercises = {props.exercises2}/>
            <Parts name = {props.part3} exercises = {props.exercises3}/>
        </>
    )
}

export default Content