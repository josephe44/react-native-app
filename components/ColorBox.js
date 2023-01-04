import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ header }) => {
  return (
    <>
      <Text>{header}</Text>
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.cyan]}>
          <Text style={styles.text}>Cyan #2aa198</Text>
        </View>
        <View style={[styles.box, styles.blue]}>
          <Text style={styles.text}>Blue #268bd2</Text>
        </View>
        <View style={[styles.box, styles.magenta]}>
          <Text style={styles.text}>Magenta #d33682</Text>
        </View>
        <View style={[styles.box, styles.orange]}>
          <Text style={styles.text}>Orange #cb4b16</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    gap: 10,
    width: '100%',
    marginTop: 20,
  },
  box: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },

  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ColorBox;
