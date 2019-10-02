/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>APP IOUU</Text>
      <Text>Finalmente em React Native ...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold', 
  }
})


export default App;
