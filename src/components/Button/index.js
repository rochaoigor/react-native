import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const TypeColor = (type) => {
    switch (type) {
        case 'primary':
            return styles.buttonPrimary;

        case 'outlined':
            return styles.buttonOutlined;
        default:
            return styles.buttonDefault;
    }
}
const TypeColorText = (type) => {
    switch (type) {
        case 'primary':
            return styles.textPrimary;

        case 'outlined':
            return styles.textOutlined;
        default:
            return styles.textDefault;
    }
}


export default function Button(props) {
    return (
        <View>
            <TouchableOpacity
                style={TypeColor(props.type)}
                onPress={props.onPress}
            >
                <Text style={TypeColorText(props.type)}>{props.value}</Text>

            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonPrimary: {
        backgroundColor: "orange",
        alignItems: "center",
        padding: 8,
        borderRadius: 4,
        width: 320,
        marginTop: 5,
    },
    textPrimary: {
        color: "white",
        fontSize: 18,
        fontWeight: 600,
    },
    buttonOutlined: {
        backgroundColor: "#Fff",
        alignItems: "center",
        padding: 8,
        borderRadius: 4,
        width: 320,
        marginTop: 5,
        borderColor: "orange",
        borderWidth:1,
    },
    textOutlined: {
        color: "orange",
        fontSize: 18,
        fontWeight: 600,
    },
    buttonDefault: {
        backgroundColor: "#ddd",
        alignItems: "center",
        padding: 8,
        borderRadius: 4,
        width: 320,
        marginTop: 5,
    },
    textDefault: {
        color: "#1a1a1a",
        fontSize: 18,
        fontWeight: 600,
    }
})
