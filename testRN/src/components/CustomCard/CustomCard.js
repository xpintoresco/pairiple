import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        { props.children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 40,
    marginVertical:7,
    paddingHorizontal: 30,
    alignItems: 'center',
    backgroundColor: '#D2D8F0',
  },
  cardContent: {
    marginVertical: 13,
    marginHorizontal: 5,
  },
})