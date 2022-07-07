import { useRef, useState } from 'react'

enum Operadores {
  add,
  substract,
  multiply,
  divide,
}

const useCalculator = () => {

  const operator = useRef<Operadores>()

  const [number, setNumber] = useState('0')
  const [prevNumber, setPrevNumber] = useState('0')

  const clear = () => {
    setNumber('0')
    setPrevNumber('0')
  }

  const composeNumber = ( textNumber: string ) => {
    if (number.includes('.') && textNumber === '.') {
      return
    }

    if (number.startsWith('0') || (number.startsWith('-0'))) {
      if (textNumber === '.') {
        setNumber(number + '.')
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber)
      } else if (textNumber !== '0' && !number.includes!('.')) {
        setNumber(textNumber)
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number)
      } else {
        setNumber(number + textNumber)
      }
    } else {
      setNumber( number + textNumber )
    }
  }

  const positiveNegative = () => {
    (number.includes('-'))
      ? (setNumber(number.replace('-', '')))
      : (setNumber('-' + number))
  }

  const deleteNumber = () => {
    let negative = ''
    let tmp = number

    if (number.includes('-')) {
      negative = '-'
      tmp = number.replace('-', '')
    }

    if (number.length > 1) {
      setNumber(negative + tmp.slice(0, -1))
    } else {
      setNumber('0')
    }
  }

  const savePrevNumber = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1))
    } else {
      setPrevNumber(number)
    }
    setNumber('0')
  }

  const btnAdd = () => {
    savePrevNumber()
    operator.current = Operadores.add
  }

  const btnSubstract = () => {
    savePrevNumber()
    operator.current = Operadores.substract
  }

  const btnMultiply = () => {
    savePrevNumber()
    operator.current = Operadores.multiply
  }

  const btnDivide = () => {
    savePrevNumber()
    operator.current = Operadores.divide
  }

  const applyOperation = () => {
    const num1 = Number( prevNumber )
    const num2 = Number( number )

    if (prevNumber === '0') {
      return
    }

    switch (operator.current) {
      case Operadores.divide:
        setNumber(`${num1 / num2}`)
        break
      case Operadores.multiply:
        setNumber(`${num1 * num2}`)
        break
      case Operadores.substract:
        setNumber(`${num1 - num2}`)
        break
      case Operadores.add:
        setNumber(`${num1 + num2}`)
        break
    }

    setPrevNumber('0')
  }

  return [
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
  ] as const
}


export default useCalculator
