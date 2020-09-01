import React, { Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton';

const Confirm = ({previousStep, nextStep, values}) => {
    const doBack = (e) => {
        e.preventDefault();
        previousStep();
    };

    const doContinue = (e) => {
        e.preventDefault();
        nextStep();
    };

    const { firstName, lastName, email, occupation, city, bio } = values;

    return (
        <MuiThemeProvider>
            <Fragment>
                <AppBar title="Confirm" />
                <List>
                    <ListItem
                        primaryText="firstName"
                        secondaryText={firstName}
                    />
                </List>
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

export default Confirm;