import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styleSheet1 from './styleSheet1';
import { connect } from 'react-redux';

const FlatButtons = (props) => {
  return (
    <View>
      <TouchableOpacity 
        style={styleSheet1.flatbuttons}
        onPress={props.fun}
        
        
      >
        <Text style={styleSheet1.flatbuttontext}>{props.data}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FlatButtons
