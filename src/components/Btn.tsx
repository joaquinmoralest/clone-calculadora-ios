import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
  text: string,
  type?: 'primary' | 'function' | 'operator',
  width: boolean,
}

const Btn = ({ text, type, width = false }: Props) => {
  return (
    <TouchableOpacity>
      <View style={[
        styles.btn,
        (type === 'primary') ? styles.btnPrimary :
        (type === 'function') ? styles.btnFunction : styles.btnOperator,
        (width) && styles.btnLarge,
      ]}>
        <Text style={ styles.btnText }> { text } </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  btnText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '300',
  },
  btnPrimary: {
    backgroundColor: '#2D2D2D',
  },
  btnFunction: {
    backgroundColor: '#9B9B9B',
  },
  btnOperator: {
    backgroundColor: '#FF9427',
  },
  btnLarge: {
    width: 180,
  },
})

export default Btn
