import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ColorBox from './components/ColorBox';

export default function App() {
  const COLORS = [
    { colorName: 'Base03', hexCode: '#002b36' },
    { colorName: 'Base02', hexCode: '#073642' },
    { colorName: 'Base01', hexCode: '#586e75' },
    { colorName: 'Base00', hexCode: '#657b83' },
    { colorName: 'Base0', hexCode: '#839496' },
    { colorName: 'Base1', hexCode: '#93a1a1' },
    { colorName: 'Base2', hexCode: '#eee8d5' },
    { colorName: 'Base3', hexCode: '#fdf6e3' },
    { colorName: 'Yellow', hexCode: '#b58900' },
    { colorName: 'Orange', hexCode: '#cb4b16' },
    { colorName: 'Red', hexCode: '#dc322f' },
    { colorName: 'Magenta', hexCode: '#d33682' },
    { colorName: 'Violet', hexCode: '#6c71c4' },
    { colorName: 'Blue', hexCode: '#268bd2' },
    { colorName: 'Cyan', hexCode: '#2aa198' },
    { colorName: 'Green', hexCode: '#859900' },
  ];

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* created a list */}
          <FlatList
            data={COLORS}
            style={styles.boxContainer}
            keyExtractor={(item) => item.colorName}
            renderItem={({ item }) => (
              <ColorBox name={item.colorName} color={item.hexCode} />
            )}
            ListHeaderComponent={
              <Text style={styles.headerText}>
                Here are some boxes of different colors
              </Text>
            }
            // horizontal
            // showsHorizontalScrollIndicator
            // pagingEnabled
          />
          {/* <Text>Hello world</Text> */}

          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 2,
  },

  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 40,
  },

  headerText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    width: '100%',
  },

  boxContainer: {
    width: '100%',
    marginTop: 20,
  },
});
