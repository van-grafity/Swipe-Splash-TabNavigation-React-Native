import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Root } from 'native-base'
import InitialStack from './Route'

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Root>
                <InitialStack />
            </Root>
        );
    }
}
