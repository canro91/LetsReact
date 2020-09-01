import React, { Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const UserDetailsForm = ({ nextStep, handleOnChange, values }) => {
    const doContinue = (e) => {
        e.preventDefault();
        nextStep();
    };

    return (
        <MuiThemeProvider>
            <Fragment>
                <AppBar title="User details" />
                <TextField
                    hintText='Enter your First Name'
                    floatingLabelText="First Name"
                    onChange={handleOnChange('firstName')}
                    defaultValue={values.firstName}
                />
                <br />
                <TextField
                    hintText='Enter your Last Name'
                    floatingLabelText="Last Name"
                    onChange={handleOnChange('lastName')}
                    defaultValue={values.lastName}
                />
                <br />
                <TextField
                    hintText='Enter your Email'
                    floatingLabelText="Email"
                    onChange={handleOnChange('email')}
                    defaultValue={values.email}
                />
                <br />
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
    button : {
        margin: 15
    }
};

export default UserDetailsForm;