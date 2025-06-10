import React, {useState} from "react";
import { StyleSheet,SafeAreaView, TextInput, Text } from "react-native";

    const styles = StyleSheet.create({
        input: {
            border:20,
            color: '#1a1a1a',
            width:320,
            marginBottom:15,
            padding:10,
            borderRadius:4,
            marginTop:3,         
            fontSize:18,   
        },
      

    })

export default function Meuinput(props){ 

  const [value, setvalue] = useState("");

  const handleChange = (text) => {
    setvalue(text);
    props.onChangeText(text);
  }
  

    return(
    <SafeAreaView>
        <Text >
          {props.Label}
        </Text>
      <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      value={value}
      secureTextEntry={props.password}
      onChangeText={handleChange}
     
      />
           
    </SafeAreaView>    
    );

}