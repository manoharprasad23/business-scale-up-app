import React, {useState} from 'react';
import {QuizData} from '../QuizData/QuizData';

const Question = (props) => {
    const totalNumberOfQuestions = QuizData.length;

    const [ questionAndAnswer, setQuestionAndAnswer ] = useState([]); 

    const clickHandler = (id, answerOption) => {
        if(answerOption === '_first_option') {
            const newElement = {
                question: JSON.parse(JSON.stringify(QuizData[id-1].question)),
                answerSelected: JSON.parse(JSON.stringify(QuizData[id-1].optionOne))
            }
            setQuestionAndAnswer(questionAndAnswer => [...questionAndAnswer, newElement]);
        } else if (answerOption === '_second_option') {
            const newElement = {
                question: JSON.parse(JSON.stringify(QuizData[id-1].question)),
                answerSelected: JSON.parse(JSON.stringify(QuizData[id-1].optionTwo))
            }
            setQuestionAndAnswer(questionAndAnswer => [...questionAndAnswer, newElement]);
        } else if(answerOption === '_third_option') {
            const newElement = {
                question: JSON.parse(JSON.stringify(QuizData[id-1].question)),
                answerSelected: JSON.parse(JSON.stringify(QuizData[id-1].optionThree))
            }
            setQuestionAndAnswer(questionAndAnswer => [...questionAndAnswer, newElement]);
        }
        console.log('q-'+JSON.stringify(questionAndAnswer));
        props.sendFormData(questionAndAnswer);
    }

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
                                            <input onClick={()=>clickHandler(id, '_first_option')} type="radio" id={id} name={id+"-answer"} value="1" />
                                            {optionOne}
                                        </label>
                                    </div>
                                    <div className="option">
                                        <label for="two">
                                            <input onClick={()=>clickHandler(id, '_second_option')} type="radio" id={id} name={id+"-answer"} value="2" />
                                            {optionTwo}
                                        </label>
                                    </div>
                                    <div className="option">
                                        <label for="three">
                                            <input onClick={()=>clickHandler(id, '_third_option')} type="radio" id={id} name={id+"-answer"} value="3" />
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