import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'native-base'
import Swiper from 'react-native-swiper'
import LinearGradient from 'react-native-linear-gradient'

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  isLogin = () => {
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} loop={false} index={this.state.index} showsPagination={true}
        onIndexChanged={(index) => this.setState({ index: index })}
      >
        <View style={styles.slide1}>
          <Image source={require("../assets/image/objek1.png")} resizeMode="contain" style={{ width: 270, height: 215, marginHorizontal: 20 }} />
        </View>
        <View style={styles.slide1}>
          <Image source={require("../assets/image/objek2.png")} resizeMode="contain" style={{ width: "100%", height: 353, }} />
        </View>   
        <View style={styles.slide1}>
          <Image source={require("../assets/image/objek3.png")} resizeMode="contain" style={{ width: 336, height: 234, marginHorizontal: 20 }} />
          <Button transparent onPress={this.isLogin} style={{ height: 45, width: 160, marginTop: 64, borderRadius: 20, alignSelf: "center" }}>
            <LinearGradient colors={["#0BD0D4", "#00D79E"]} style={{ height: 45, width: "100%", alignItems: "center", justifyContent: "center", borderRadius: 20, }}>
              <Text>Go</Text>
            </LinearGradient>
          </Button>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})