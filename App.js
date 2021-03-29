import React, { Component } from 'react'
import { Text, View } from 'react-native'
import params from './src/params'

export default class App extends Component{
  render(){
    return(
      <View>
        <Text>Iniciando o Mines!</Text>
        <Text>Tamanho da Grade: {params.getRowsAmount()} x {params.getColumnsAmount()}</Text>
      </View>
    )
  }
}