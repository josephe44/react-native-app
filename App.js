import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ColorBox from './components/ColorBox';

export default function App() {
  const header = 'Here are some boxes of different colors';
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Here are some boxes of different colors
        </Text>

        {/* color boxes */}
        <ColorBox header={header} />
        {/* status bar */}

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
});
