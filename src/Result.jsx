import React from 'react'
import './Result.css'

const Result = ({RandomNum , term}) => {
    let answer;

    if (term) {
        if (RandomNum < term) {
            answer ='Higher';
        }
        else if (RandomNum > term) {
            answer = 'Lower';
        }
        else if (RandomNum == term) {
            answer =  'correct';
        }
        else {
            answer = 'Enter Valid Number';
        }
    }

    return (
        <>
            <h4>Your Guessed : {answer}</h4>
        </>
    )
}

export default Result