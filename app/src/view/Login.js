import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

isHome = () => {
    this.props.navigation.navigate('Home')
}

  render() {
    return (
      <View>
        <Text> Login </Text>
        <Button 
        title='Login'
        onPress={this.isHome}
        />
      </View>
    );
  }
}
