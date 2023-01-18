import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type= 'PRIMARY'}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
      padding: 15,
      marginVertical: 5,
      alignItems: 'center',
    },
    container_PRIMARY: {
      width: '90%',
      borderRadius: 20,
      backgroundColor: '#2D4654',
    },
    container_SECONDARY: {
      width: '40%',
      borderRadius: 30,
      backgroundColor: '#A44A3F',
    },
    container_TERTIARY: {
      width: '40%',
    },
    container_FOURTH: {
      width: '40%',
      borderRadius: 30,
      backgroundColor: '#2D4654',
      marginHorizontal: 10
    },
    text: {
        fontWeight: 'bold',
        color: '#FFF8F0',
    },
    text_SECONDARY: {
      color: '#FFF8F0'
    },
    text_TERTIARY: {
        color: '#687882'
    },
    
})
export default CustomButton