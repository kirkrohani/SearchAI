import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Welcome to Search AI!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
