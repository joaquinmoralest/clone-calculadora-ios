import React from 'react'
import { Text, View } from 'react-native'
import Btn from '../components/Btn'
import useCalculator from '../hooks/useCalculator'
import styles from '../theme/app'

const Calculadora = () => {

  const [
    prevNumber,
    number,
    clear,
    positiveNegative,
    deleteNumber,
    composeNumber,
    btnAdd,
    btnSubstract,
    btnMultiply,
    btnDivide,
    applyOperation,
  ] = useCalculator()

  return (
    <View style={ styles.calculadoraContainer }>
      {
        (prevNumber !== '0') && <Text style={ styles.smallResult }>{ prevNumber }</Text>
      }
      <Text
        style={ styles.result }
        numberOfLines={ 1 }
        adjustsFontSizeToFit>
        { number }
      </Text>

      <View style={ styles.row }>
        <Btn text="C" type="function" action={ clear }/>
        <Btn text="+/-" type="function" action={ positiveNegative }/>
        <Btn text="del" type="function" action={ deleteNumber }/>
        <Btn text="/" type="operator" action={ btnDivide }/>
      </View>
      <View style={ styles.row }>
        <Btn text="7" type="primary" action={ composeNumber }/>
        <Btn text="8" type="primary" action={ composeNumber }/>
        <Btn text="9" type="primary" action={ composeNumber }/>
        <Btn text="X" type="operator" action={ btnMultiply }/>
      </View>
      <View style={ styles.row }>
        <Btn text="4" type="primary" action={ composeNumber }/>
        <Btn text="5" type="primary" action={ composeNumber }/>
        <Btn text="6" type="primary" action={ composeNumber }/>
        <Btn text="-" type="operator" action={ btnSubstract }/>
      </View>
      <View style={ styles.row }>
        <Btn text="1" type="primary" action={ composeNumber }/>
        <Btn text="2" type="primary" action={ composeNumber }/>
        <Btn text="3" type="primary" action={ composeNumber }/>
        <Btn text="+" type="operator" action={ btnAdd }/>
      </View>
      <View style={ styles.row }>
        <Btn text="0" type="primary" action={ composeNumber } width/>
        <Btn text="." type="primary" action={ composeNumber }/>
        <Btn text="=" type="operator" action={ applyOperation }/>
      </View>
    </View>
  )
}

export default Calculadora
