import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Here are some boxes of different colors
        </Text>
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

  boxContainer: {
    gap: 10,
    width: '100%',
    marginTop: 20,
  },

  headerText: {
    color: '#000',
    fontSize: '18px',
    fontWeight: 'bold',
    width: '100%',
  },

  text: {
    color: '#fff',
    fontWeight: 'bold',
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
});
