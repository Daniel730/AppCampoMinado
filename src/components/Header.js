import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Flag from './Flag'

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity onPress={props.onFlagPress} style={styles.flagButton}>
                    <Flag big />
                </TouchableOpacity>
                <Text style={styles.flagsLeft}>
                    ={props.flagsLeft}
                </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
                <Text style={styles.buttonLabel}>Novo Jogo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#404071",
        alignItems: 'center',
        justifyContent: "space-around",
        paddingTop: 20,
        paddingHorizontal: 20
    },
    flagContainer: {
        flexDirection: 'row'
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20,
        color: "white"
    },
    button: {
        backgroundColor: "#707094",
        padding: 5
    },
    buttonLabel: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    }
})