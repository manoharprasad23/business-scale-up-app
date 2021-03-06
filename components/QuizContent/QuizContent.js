import React, {useState} from 'react';
import Question from '../Question/Question';
import Link from 'next/link';
import {QuizData} from '../QuizData/QuizData';

const QuizContent = () => {
    const totalNumberOfQuestions = QuizData.length;

    const handleSubmit = (event) => {
        event.preventDefault();
        let correctAnswerCount = 0;
        let answersSelected = 0;
        let optionOneCount = 0;
        let optionTwoCount = 0;
        let optionThreeCount = 0;
        let questionAndAnswerForm = [];
        var element = document.getElementsByTagName('input');
        for(var i = 0; i < element.length; i++) {   
            if(element[i].type="radio") { 
                if(element[i].checked) {
                    console.log('option selected ---> '+element[i].value);
                    answersSelected++;
                    questionAndAnswerForm.push(element[i].value);
                    if(element[i].value == 1) {
                        optionOneCount++;
                    } else if (element[i].value == 2) {
                        optionTwoCount++;
                    } else if (element[i].value == 3) {
                        optionThreeCount++;
                    }
                }
            } 
        }
        for(var i = 0; i < 10; i++) {
            if(questionAndAnswerForm[i] == QuizData[i].correctAnswer) {
                correctAnswerCount++;
            }
        }
        console.log('correct answer count is -> ' + answersSelected, correctAnswerCount)
        const correctAnswerPercentage = Math.round((correctAnswerCount/10)*100);
        

        const finalScore = Math.round((optionOneCount * 10) + (optionTwoCount * 7) + (optionThreeCount * 4) );
        window.sessionStorage.setItem('correctAnswerPercentage', finalScore);

        if(answersSelected == 10){
            //console.log('form submission initiated');
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: questionAndAnswerForm,
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                }
            })
            window.location.href = window.location.origin + "/result";
        } else {
            alert("Please answer all the questions");
        }
    }
    return (
        <div className="quiz-content header-padding">
            <div className="container">
                <div className="section-title">
                    <h2>Take the test</h2>
                    <div className="bar"></div>
                </div>
                <form onSubmit={handleSubmit}>
                    {/* <Question sendFormData={getFormData}/> */}




                    {/* Question partial starts here */}
                    <div className="question-content">
                        {
                            
                            QuizData.map((item) => {
                                const clickHandler = (questionId, answerOption) => {
                                }
                                const {id, heading, leftBannerText, optionOne, optionTwo, optionThree, question} = item;
                                return (
                                    <div className="question-section">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-services">
                                                <p>{id}/{totalNumberOfQuestions}</p>
                                                <h3>{leftBannerText}</h3>
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
                                                        <input onClick={()=>clickHandler(id, '_first_option')} type="radio" id={id+'_first_option'} name={id+"-answer"} value="1" />
                                                        {optionOne}
                                                    </label>
                                                </div>
                                                <div className="option">
                                                    <label for="two">
                                                        <input onClick={()=>clickHandler(id, '_second_option')} type="radio" id={id+'_second_option'} name={id+"-answer"} value="2" />
                                                        {optionTwo}
                                                    </label>
                                                </div>
                                                <div className="option">
                                                    <label for="three">
                                                        <input onClick={()=>clickHandler(id, '_third_option')} type="radio" id={id+'_third_option'} name={id+"-answer"} value="3" />
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
                    {/* Question partial ends here */}




                    
                        <div className="submit-button">
                            {/* {
                                answersSelected == 10
                                ?   <Link href="/result">
                                    <button className="submit" type="submit">Submit</button>
                                    </Link>
                                : <></>
                            } */}
                            <button className="submit" type="submit">Submit</button>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default QuizContent;