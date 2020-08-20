import React from 'react';

const Question = ({ question, answers, selected }) => {
    const [options, setOptions] = React.useState(answers);

    return (
        <div className="questionBox">
            <h4>{question}</h4>
            {options.map((text, index) =>
                <button
                    className="answerButton"
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