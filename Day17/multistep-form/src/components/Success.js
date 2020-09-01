import React, {Fragment} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const Success = () => {
    return (
        <MuiThemeProvider>
            <Fragment>
                <AppBar title="Success" />

                <h2>Thanks for your registration!!!</h2>
            </Fragment>
        </MuiThemeProvider>
    );
}

export default Success;