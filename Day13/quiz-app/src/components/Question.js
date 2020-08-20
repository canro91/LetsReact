import React from 'react';

const Question = ({ question, answers, selected }) => {
    const [options, setOptions] = React.useState(answers);

    return (
        <div className="questionBox">
            <div className="question">{question}</div>
            {options.map((text, index) =>
                <button
                    className="answerBtn"
                    key={index}
                    onClick={() => { setOptions([text]); selected(text); }}
                >
                    {text}
                </button>
            )}
        </div>
    );
}

export default Question