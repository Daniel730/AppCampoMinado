import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default props => {
    return(
        <Modal onRequestClose={props.onCancel} visible={props.isVisible} animationType="slide" transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecione o Nível</Text>
                    <TouchableOpacity style={[styles.button, styles.bgSuperEasy]} onPress={() => props.onLevelSelected(0.02)}>
                        <Text style={styles.buttonLabel}>Sério?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.bgEasy]} onPress={() => props.onLevelSelected(0.1)}>
                        <Text style={styles.buttonLabel}>Fácil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.bgMedium]} onPress={() => props.onLevelSelected(0.2)}>
                        <Text style={styles.buttonLabel}>Médio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.bgHard]} onPress={() => props.onLevelSelected(0.3)}>
                        <Text style={styles.buttonLabel}>Difícil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.bgSuperHard]} onPress={() => props.onLevelSelected(0.6)}>
                        <Text style={styles.buttonLabel}>Coragem...</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.6)"
    },

    container:{
        backgroundColor: "#EEE",
        alignItems: 'center',
        justifyContent: "center",
        padding: 15
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    button: {
        width: 150,
        marginTop: 10,
        padding: 5,
        alignItems: "center"
    },

    buttonLabel:{
        fontSize: 20,
        color: "#eee",
        fontWeight: "bold"
    },

    bgSuperEasy:{
        backgroundColor: "#93bf85"
    },

    bgEasy:{
        backgroundColor: "#008000"
    },

    bgMedium:{
        backgroundColor: "#b1b110"
    },

    bgHard:{
        backgroundColor: "#ff0000"
    },

    bgSuperHard:{
        backgroundColor: "#4c0099"
    }
})