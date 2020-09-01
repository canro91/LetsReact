import React from 'react';
import UserDetailsForm from './UserDetailsForm';
import PersonalDetailsForm from './PersonalDetailsForm';
import Confirm from './Confirm';
import Success from './Success';

const UserForm = () => {
    const [step, setStep] = React.useState(1);
    const [state, setState] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        bio: '',
    });

    const previousStep = () => {
        setStep(step - 1);
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const handleOnChange = input => e => {
        const value = e.target.value;
        setState({
            ...state,
            [input]: value
        });
    };

    return (
        <div>
            {
                {
                    1: <UserDetailsForm nextStep={nextStep} handleOnChange={handleOnChange} values={state} />,
                    2: <PersonalDetailsForm previousStep={previousStep} nextStep={nextStep} handleOnChange={handleOnChange} values={state} />,
                    3: <Confirm previousStep={previousStep} nextStep={nextStep} handleOnChange={handleOnChange} values={state} />,
                    4: <Success previousStep={previousStep} handleOnChange={handleOnChange} values={state} />,
                }[step]
            }
        </div>
    );
}

export default UserForm;