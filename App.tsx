import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {

const [randomBackground, setRandomBackground] = useState("black")
const [boxOne, setBoxOne] = useState("white")
const [boxTwo, setBoxTwo] = useState("white")
const [boxThree, setBoxThree] = useState("white")
const [boxFour, setBoxFour] = useState("white")
const [circleOne, setCircleOne] = useState("white")
const [circleTwo, setCircleTwo] = useState("white")

const generateColor = () => {
  const hexRange = "0123456789ABCDEF"
  let color = "#"
  for (let i = 0; i<6; i++){
     color += hexRange[Math.floor(Math.random()*16)] 
  }
  return color
}

const RandomBackground = () => {
  let val = generateColor()
  setRandomBackground(val)
}
const BoxOne = () => {
  let val = generateColor()
  setBoxOne(val)
}
const BoxTwo = () => {
  let val = generateColor()
  setBoxTwo(val)
}
const BoxThree = () => {
  let val = generateColor()
  setBoxThree(val)
}
const BoxFour = () => {
  let val = generateColor()
  setBoxFour(val)
}
const CircleOne = () => {
  let val = generateColor()
  setCircleOne(val)
}
const CircleTwo = () => {
  let val = generateColor()
  setCircleTwo(val)
}

const handlePress = () => {
  RandomBackground();
  BoxOne(); 
  BoxTwo(); 
  BoxThree(); 
  BoxFour(); 
  CircleOne();
  CircleTwo(); 
}

  return (
    <>
    <StatusBar backgroundColor={randomBackground}/>
    <View style={[styles.container, {backgroundColor: randomBackground}]}>
      <View style={styles.firstContainer}>
      <View style={[styles.item, {backgroundColor: boxOne}]}></View>
      <View style={[styles.itemE, {backgroundColor: circleOne}]}></View>
      <View style={[styles.item, {backgroundColor: boxTwo}]}></View>
      </View>

      <TouchableOpacity onPress={handlePress}>
        <View style={styles.actionBtn}>
      <Text style={styles.actionBtnTxt}>Press Me</Text>
      </View>
      </TouchableOpacity>

      <View style={styles.secondContainer}>
      <View style={[styles.item, {backgroundColor: boxThree}]}></View>
      <View style={[styles.itemT, {backgroundColor: circleTwo}]}></View>
      <View style={[styles.item, {backgroundColor: boxFour}]}></View>
      </View>
      
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "grey",
    paddingVertical: 10,
    paddingHorizontal: 40,
    margin: 40
  },
  actionBtnTxt: {
    fontSize: 24,
    color: "white",
    textTransform: "uppercase"
  },
  firstContainer: {
    height: '40%',
    alignItems: 'center',
    flexDirection: "row",
  },
  secondContainer: {
    height: '40%',
    alignItems: 'center',
    flexDirection: "row",
  },
  item: {
    height: '33%',
    width: '33%',
    borderRadius: 8
  },
  itemE: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'flex-end'
  },
  itemT: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'flex-start'
  }
  }
)