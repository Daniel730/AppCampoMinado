import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Field from './src/components/Field'
import params from './src/params'

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Iniciando o Mines!</Text>
        <Text>Tamanho da Grade: {params.getRowsAmount()} x {params.getColumnsAmount()}</Text>

        <Field />
        <Field opened />
        <Field opened nearMines={1} />
        <Field opened nearMines={2} />
        <Field opened nearMines={3} />
        <Field opened nearMines={4} />
        <Field opened nearMines={5} />
        <Field opened nearMines={6} />
        <Field opened nearMines={7} />
        <Field mined />
        <Field mined opened />
        <Field mined opened exploded />
        <Field flagged />
        <Field flagged opened/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})