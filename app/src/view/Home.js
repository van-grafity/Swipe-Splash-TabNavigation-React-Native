import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { TextInput } from 'react-native-gesture-handler'
import { Container, Tabs, Tab } from 'native-base'
import Detail from './Detail'
import ForgotPassword from './ForgotPassword'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ alignItems: 'center', borderRadius: 20, paddingHorizontal: 16, borderColor: "#E0E0E0", borderWidth: 1, marginVertical: 8, marginHorizontal: 16, height: 40 }}>
                    <TextInput style={{ flex: 1, height: 40, fontSize: 14, fontFamily: 'Ubuntu-Medium', color: "#000000" }}
                        underlineColorAndroid={'transparent'}
                        placeholder='Search here'
                        onChangeText={(text) => this.setState({ text: text })}
                    />
                </View>
             
                    <Container>
                        <Tabs
                            onChangeTab={(i, ref) => this.setState({ numOfTab: i.i })}
                            tabBarUnderlineStyle={{ backgroundColor: '#00D79E', height: 2 }}>

                            <Tab heading='Register'>
                                <Detail
                                    navigation={this.props.navigation}
                                />
                            </Tab>
                            <Tab heading='ForgotPassword'>
                                <ForgotPassword
                                    navigation={this.props.navigation}
                                />
                            </Tab>

                        </Tabs>
                    </Container>
                
            </View>
        );
    }
}
