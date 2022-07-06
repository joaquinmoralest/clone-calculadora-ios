import React from 'react'
import { Text, View } from 'react-native'
import Btn from '../components/Btn'
import styles from '../theme/app'

const Calculadora = () => {
  return (
    <View style={ styles.calculadoraContainer }>
      <Text style={ styles.smallResult }>1,500.00</Text>
      <Text style={ styles.result }>1,500.00</Text>

      <View style={ styles.row }>
        <Btn text="C" type="function"/>
        <Btn text="+/-" type="function"/>
        <Btn text="del" type="function"/>
        <Btn text="/" type="operator"/>
      </View>
      <View style={ styles.row }>
        <Btn text="7" type="primary"/>
        <Btn text="8" type="primary"/>
        <Btn text="9" type="primary"/>
        <Btn text="X" type="operator"
        />
      </View>
      <View style={ styles.row }>
        <Btn text="4" type="primary"/>
        <Btn text="5" type="primary"/>
        <Btn text="6" type="primary"/>
        <Btn text="-" type="operator"
        />
      </View>
      <View style={ styles.row }>
        <Btn text="1" type="primary"/>
        <Btn text="2" type="primary"/>
        <Btn text="3" type="primary"/>
        <Btn text="+" type="operator"
        />
      </View>
      <View style={ styles.row }>
        <Btn text="0" type="primary" width/>
        <Btn text="." type="primary"/>
        <Btn text="=" type="operator"
        />
      </View>
    </View>
  )
}

export default Calculadora
