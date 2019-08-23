import React, { Component } from 'react';
import { View, Text } from 'react-native';
// navigation
import { createStackNavigator, createAppContainer } from 'react-navigation'
// view
import Welcome from './view/Welcome'
import Login from './view/Login'
import Register from './view/Register'
import ForgotPassword from './view/ForgotPassword'
import Home from './view/Home'
import Detail from './view/Detail'

const WelcomeStack = createStackNavigator({
    Welcome: { screen: Welcome }
}, {
        headerMode: 'none'
    })

const LoginStack = createStackNavigator({
    Login: { screen: Login },
    Register: { screen: Register },
    ForgotPassword: { screen: ForgotPassword },
    Home: { screen: Home },
    Detail: { screen: Detail }
}, {
        headerMode: 'none'
    })

const InitialStack = createStackNavigator({
    WelcomeStack: { screen: WelcomeStack },
    LoginStack: { screen: LoginStack }
}, {
        initialRouteName: 'WelcomeStack',
        headerMode: 'none'
    })

export default createAppContainer(InitialStack)