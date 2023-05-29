import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styleSheet1 from './styleSheet1'

 export default function CustomButton(props) {
  return (
    <View >
      <TouchableOpacity style={styleSheet1.buttons}onPress={props.fun}>
        <Text style={styleSheet1.text}>{props.data}</Text>
      </TouchableOpacity>
    </View>
  )
}

