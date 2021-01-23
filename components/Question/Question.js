import React from 'react';
import {QuizData} from '../QuizData/QuizData';

const Question = () => {
    console.log(QuizData);
    const totalNumberOfQuestions = QuizData.length;
    return (
        <div className="question-content">
            {
                QuizData.map((item) => {
                    const {id, heading, leftBannerText, optionOne, optionTwo, optionThree, question} = item;
                    return (
                        <div className="question-section">
                            <div className="left-side-heading-content">
                                <p>{id}/{totalNumberOfQuestions}</p>
                                <div className="text">
                                    {leftBannerText}
                                </div>
                            </div>
                            <div className="right-side-question-content">
                                <div className="question-title">
                                    <h5>{heading}</h5>
                                </div>
                                <div className="question">
                                    <p>{question}</p>
                                </div>
                                <div className="answer-options">
                                    <div className="option">
                                        <label for="one">
                                            <input type="radio" id="one" name="first_item" value="1" />
                                            {optionOne}
                                        </label>
                                    </div>
                                    <div className="option">
                                        <label for="two">
                                            <input type="radio" id="two" name="first_item" value="2" />
                                            {optionTwo}
                                        </label>
                                    </div>
                                    <div className="option">
                                        <label for="three">
                                            <input type="radio" id="three" name="first_item" value="3" />
                                            {optionThree}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Question;