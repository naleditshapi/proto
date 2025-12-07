// this file is part of the Expo Router and is used to define the main page of your app.
// It is the entry point for your application and is rendered when the app starts.
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});