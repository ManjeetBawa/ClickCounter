import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
function App(props: any) {
  return (
    <View style={styles.taskcontainer}>
      <Text> {props.value}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  taskcontainer: {
    backgroundColor: 'red',
  },
});

export default App;