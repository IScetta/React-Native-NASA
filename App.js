import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet} from 'react-native';
import Router from './src/router/Routes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Router/>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"rgba(7,26,93,255)",
    
    paddingTop: Platform.OS === "android" && 45
  },
});
