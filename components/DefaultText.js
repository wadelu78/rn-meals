import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DefaultText = pros => {
  return <Text style={styles.text}>{pros.children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans'
  }
})

export default DefaultText
