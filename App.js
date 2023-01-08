import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import ColorBox from './components/ColorBox';

export default function App() {
  const header = 'Here are some boxes of different colors';

  const data = [
    {
      name: 'Cyan',
      colorHex: '#2aa198',
    },
    {
      name: 'Blue',
      colorHex: '#268bd2',
    },
    {
      name: 'Magenta',
      colorHex: '#d33682',
    },
    {
      name: 'Orange',
      colorHex: '#cb4b16',
    },
  ];

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

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
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
    paddingHorizontal: '10px',
    paddingTop: 40,
  },

  headerText: {
    color: '#000',
    fontSize: '18px',
    fontWeight: 'bold',
    width: '100%',
  },

  boxContainer: {
    width: '100%',
    marginTop: 20,
  },
});
