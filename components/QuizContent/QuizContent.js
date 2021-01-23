import React from 'react';
import Question from '../Question/Question';
import Link from 'next/link';

const QuizContent = () => {
    return (
        <div className="quiz-content ptb-100">
            <div className="container">
                <div className="text">
                    <h3>How future ready is your business?</h3>
                </div>
                <div className="sub-heading">
                    <p>Some random text goes here Some random text goes here Some random text goes here Some random text goes here Some random text goes here Some random text goes here Some random text goes here Some random text goes here Some random text goes here Some random text goes here Some random text goes here</p>
                </div>
                <Question />
                <div className="submit-button">
                    <Link href="/result">
                        <button className="submit">Submit</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default QuizContent;