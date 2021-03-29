import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import params from '../params'
import Flag from './Flag';
import Mine from './Mine';

export default props => {

    const {mined, opened, nearMines, exploded, flagged} = props

    const styleField = [styles.field];
    if(opened) styleField.push(styles.opened);
    if(exploded) styleField.push(styles.exploded)
    if(flagged) styleField.push(styles.flagged)
    if(!opened && !exploded) styleField.push(styles.regular)

    let color = null
    if(nearMines > 0){
        if(nearMines == 1) color = "#2f4f4f"
        if(nearMines == 2) color = "#253f3f"
        if(nearMines >= 2 && nearMines <= 6) color = "#1c2f2f"
        if(nearMines >= 6) color= "#121f1f"
    }

    return(
        <TouchableWithoutFeedback onPress={props.onOpen}>
            <View style={styleField}>
                {
                    !mined && opened && nearMines > 0 ? 
                        <Text style={[styles.label, {color: color}]}>
                            {nearMines}
                        </Text>
                    : false 
                }

                {
                    mined && opened ? <Mine /> : false
                }

                {
                    flagged && !opened ? <Flag /> : false
                }
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular: {
        backgroundColor: "#b20000",
        borderLeftColor: '#770000',
        borderTopColor: "#770000",
        borderRightColor: "#150000",
        borderBottomColor: "#150000"
    },
    opened: {
        backgroundColor: "#b20000",
        borderColor: "#770000",
        alignItems: 'center',
        justifyContent: "center"
    },
    label: {
        fontWeight: "bold",
        fontSize: params.fontSize,
    },
    exploded: {
        backgroundColor: "red",
        borderColor: "red"
    }
})