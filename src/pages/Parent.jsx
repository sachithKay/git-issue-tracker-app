import React, {Component} from 'react';
import Header from '../components/common/Header.jsx';
import {MuiThemeProvider} from 'material-ui/styles';
import defaultTheme from '../utils/Theme'
import Box from '@material-ui/core/Box'
import PropTypes from 'prop-types';

class Parent extends Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={this.props.theme}>
                <Box className='page-container'>
                    <Header/>
                    <Box className='content-wrap'>
                        {this.props.children}
                    </Box>
                </Box>
            </MuiThemeProvider>);
    }
}

Parent.propTypes = {
    data: PropTypes.element,
    theme: PropTypes.shape({}),
    error: PropTypes.object,
};

Parent.defaultProps = {
    data: <span/>,
    theme: defaultTheme,
    error: null,
};

export default (Parent);