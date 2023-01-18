import { View, Text, textInput, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value} 
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input} 
        secureTextEntry={secureTextEntry}
        autoCapitalize='none'
        placeholderTextColor= "#465259"
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: 50,

        borderColor: '#d9d5d0',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal:10,
        marginVertical: 5,
        paddingTop: 15,
    },
})
export default CustomInput