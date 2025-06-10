import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Meuinput from "../../components/myInput";
import Button from "../../components/Button";


import userService from "../../services/userService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";


export default function LoginScreen() {
    const [email, setEmail] = useState("");

    const [senha, setSenha] = useState("");

    const navigation = useNavigation();

    const saveData = async (token, usuario) => {
        try {
            await AsyncStorage.setItem("token", token);
            await AsyncStorage.setItem("usuario", usuario);
            navigation.navigate("Home");
        } catch (error) {
            console.log("Erro ao salvar os dados!", error)
        }
    }

    const logar = async () => {
        // navigation.navigate("Home");

        if (email === " " || senha === "") {
            alert("Erro, Preenchimento de campos obrigátorios!");
            return;
        };

        try {
            const response = await userService.login(email, senha);

            if (response.status === 200) {
                ;
                
                navigation.navigate("Home");
            }
        } catch (error) {
            alert("Erro")
        }


    };

    return (
        <View style={styles.containerLogin}>
            <Text style={styles.title}>Login</Text>
            <Meuinput
                Label="E-mail"
                placeholder="exemplo@exemplo.com"
                password={false}
                onValueChange={setEmail}
                onChangeText={setEmail}
            />

            <Meuinput
                Label="Password"
                placeholder="123456"
                password={true}
                onValueChange={setSenha}
                onChangeText={setSenha}
            />

            <View style>
                <Text style={styles.textForgotPassword}>Esqueci minha senha</Text>
            </View>
            <View>
                <Button
                    type='primary'
                    value='Entrar'
                    onPress={logar} />

            </View>
            <View>
                <Button
                    type='outlined'
                    value='Cadastrar'
                    onPress={logar} />

            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    containerLogin: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff',
        flexDirection: "column"

    },
    title: {
        fontSize: 30,
        color: 'orange',
        fontWeight: 800,
        marginBottom: 20,
        textTransform: "uppercase"
    },

    textForgotPassword: {
        fontSize: 15,
        color: "orange",
        fontStyle: "italic"
    }
}

)