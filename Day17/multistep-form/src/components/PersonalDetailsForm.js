import React, {Fragment} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const PersonalDetailsForm = ({previousStep, nextStep, values, handleOnChange}) => {
    const doBack = (e) => {
        e.preventDefault();
        previousStep();
    };

    const doContinue = (e) => {
        e.preventDefault();
        nextStep();
    };

    return (
        <MuiThemeProvider>
            <Fragment>
                <AppBar title="Personal details" />
                <TextField
                    hintText='Enter your Occupation'
                    floatingLabelText="Occupation"
                    onChange={handleOnChange('occupation')}
                    defaultValue={values.occupation}
                />
                <br />
                <TextField
                    hintText='Enter your City'
                    floatingLabelText="City"
                    onChange={handleOnChange('city')}
                    defaultValue={values.city}
                />
                <br />
                <TextField
                    hintText='Enter your Bio'
                    floatingLabelText="Bio"
                    onChange={handleOnChange('bio')}
                    defaultValue={values.bio}
                />
                <br />
                <RaisedButton
                    label="Back"
                    style={styles.button}
                    onClick={doBack}
                />
                <RaisedButton
                    label="Continue"
                    primary="true"
                    style={styles.button}
                    onClick={doContinue}
                />
            </Fragment>
        </MuiThemeProvider>
    );
}

const styles = {
    button: {
        margin: 15
    }
};

export default PersonalDetailsForm;