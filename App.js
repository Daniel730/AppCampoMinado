import React, { Component } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import Header from './src/components/Header';
import MineField from './src/components/MineField';
import { cloneBoard, createMinedBoard, flagsUsed, hasExplosion, invertFlag, openField, showMines, wonGame } from './src/functions';
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

    onSelectField = (row, col) => {
        const board = cloneBoard(this.state.board)
        invertFlag(board, row, col)
        const won = wonGame(board)

        if(won){
            Alert.alert("Boooooaaa!", "Você ganhou, finalmente!");
        }

        this.setState({board, won})
    }

    render() {
        return (
            <View style={styles.container}>
                <Header 
                    flagsLeft={this.minesAmount() - flagsUsed(this.state.board) } 
                    onNewGame={() => this.setState(this.createState())}
                />
                <View style={styles.board}>
                    <MineField 
                        board={this.state.board} 
                        onOpenField={this.onOpenField} 
                        onSelectField={this.onSelectField}    
                    />
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
        backgroundColor: "#cfead9"
    }
})