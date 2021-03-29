import React, { Component } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import MineField from './src/components/MineField';
import { cloneBoard, createMinedBoard, hasExplosion, openField, showMines, wonGame } from './src/functions';
import params from './src/params'

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = this.createState()
    }

    minesAmount = () => {
        const cols = params.getColumnsAmount();
        const rows = params.getRowsAmount();
        return Math.ceil(cols * rows * params.difficultLevel)
    }

    createState = () => {
        const cols = params.getColumnsAmount();
        const rows = params.getRowsAmount();

        return {
            board: createMinedBoard(rows, cols, this.minesAmount()),
            won: false,
            lost: false
        }
    }

    onOpenField = (row, col) =>{
        const board = cloneBoard(this.state.board)
        openField(board, row, col)
        const lost = hasExplosion(board)
        const won = wonGame(board)

        if(lost){
            showMines(board)
            Alert.alert("Putz!!!", "Você perdeu, hein?! Tente de novo!")
        }

        if(won){
            Alert.alert("Boooooaaa!", "Você ganhou, finalmente!");
        }

        this.setState({board, lost, won})
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Iniciando o Mines!</Text>
                <Text>Tamanho da Grade: {params.getRowsAmount()} x {params.getColumnsAmount()}</Text>
            <View style={styles.board}>
                <MineField board={this.state.board} onOpenField={this.onOpenField} />
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        justifyContent: "flex-end"
    },
    board: {
        alignItems: "center",
        backgroundColor: "black"
    }
})