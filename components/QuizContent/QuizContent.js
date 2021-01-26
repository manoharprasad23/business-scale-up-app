import React from 'react';
import Question from '../Question/Question';
import Link from 'next/link';

const QuizContent = () => {
    let questionAndAnswerForm;
    const getFormData = (formData) => {
        questionAndAnswerForm = JSON.stringify(formData);
        console.log('form--->' + questionAndAnswerForm);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //if(questionAndAnswerForm.length >= 10){
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: questionAndAnswerForm,
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                }
            })
        //}
    }
    return (
        <div className="quiz-content ptb-100">
            <div className="container">
                <div className="text">
                    <h3>How future ready is your business?</h3>
                </div>
                <div className="sub-heading">
                    <p>Some random text goes here Some random text goes here Some random text goes here Some random text goes here Some random text goes here Some random text goes here Some random text goes here Some random text goes here Some random text goes here Some random text goes here Some random text goes here</p>
                </div>
                <form onSubmit={handleSubmit}>
                <Question sendFormData={getFormData}/>
                    <div className="submit-button">
                        <Link href="/result">
                            <button className="submit" type="submit">Submit</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default QuizContent;