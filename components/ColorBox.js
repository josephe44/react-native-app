import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ name, color }) => {
  const colorStyle = {
    backgroundColor: color,
  };

  // logic to determine if the text should be black or white
  const textColor = {
    color:
      parseInt(color.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white',
  };

  return (
    <View style={[styles.box, colorStyle]}>
      <Text style={[styles.text, textColor]}>
        {name} {color}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    // width: '100vw',
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ColorBox;
