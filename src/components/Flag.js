import React from 'react';
import { StyleSheet, View } from 'react-native';

export default props => {
    return(
        <View style={styles.container}>
            <View style={[styles.flagpole, props.big ? styles.flagpoleBigger : ""]} />
            <View style={[styles.flag, props.big ? styles.flagBigger : ""]} />
            <View style={[styles.base1, props.big ? styles.base1Bigger : ""]} />
            <View style={[styles.base2, props.big ? styles.base2Bigger : ""]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 2,
    },
    flagpole: {
        position: 'absolute',
        height: 14,
        width: 2,
        backgroundColor: "white",
        marginLeft: 9
    },
    flag: {
        position: "absolute",
        height: 5,
        width: 6,
        backgroundColor: "black",
        marginLeft: 3
    },
    base1: {
        position: "absolute",
        height: 2,
        width: 6,
        backgroundColor: "white",
        marginLeft: 7,
        marginTop: 10
    },
    base2: {
        position: "absolute",
        height: 2,
        width: 10,
        backgroundColor: "white",
        marginLeft: 5,
        marginTop: 12
    },
    flagpoleBigger: {
        height: 28,
        width: 4,
        marginLeft: 16
    },
    flagBigger: {
        height: 10,
        width: 14,
        marginLeft: 3
    },
    base1Bigger: {
        height: 4,
        width: 12,
        marginTop: 20,
        marginLeft: 12
    },
    base2Bigger: {
        height: 4,
        width: 20, 
        marginLeft: 8, 
        marginTop: 24
    }
})