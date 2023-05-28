import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import styleSheet1 from './styleSheet1'

export default function FlatButtons(props) {
  return (
    
          <View>
            <TouchableOpacity style={styleSheet1.flatbuttons}onPress={props.fun}>
              <Text style={styleSheet1.flatbuttontext}>{props.data}</Text>
            </TouchableOpacity>
          </View>
        )
      }
