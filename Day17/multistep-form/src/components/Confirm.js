import React, { Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton';

const Confirm = ({ previousStep, nextStep, values }) => {
    const doBack = (e) => {
        e.preventDefault();
        previousStep();
    };

    const doContinue = (e) => {
        e.preventDefault();
        // Backend call here...
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
                    <ListItem
                        primaryText="lastName"
                        secondaryText={lastName}
                    />
                    <ListItem
                        primaryText="email"
                        secondaryText={email}
                    />
                    <ListItem
                        primaryText="occupation"
                        secondaryText={occupation}
                    />
                    <ListItem
                        primaryText="city"
                        secondaryText={city}
                    />
                    <ListItem
                        primaryText="bio"
                        secondaryText={bio}
                    />
                </List>
                <br />
                <RaisedButton
                    label="Back"
                    style={styles.button}
                    onClick={doBack}
                />
                <RaisedButton
                    label="Confirm"
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