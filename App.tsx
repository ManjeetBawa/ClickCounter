import React, {useState} from 'react';
import {View, StyleSheet, Text, Pressable, SafeAreaView} from 'react-native';
export default function App() {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>You have clicked {count} times</Text>
        <Pressable onPress={() => setCount(count + 1)} style={styles.mybutton}>
          <Text style={styles.presstext}>click me</Text>
        </Pressable>
        <Pressable onPress={() => setCount(0)} style={styles.mybutton}>
          <Text style={styles.presstext}>Reset</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E96479',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  mybutton: {
    marginBottom: 10,
    backgroundColor: '#F5E9CF',
    borderRadius: 5,
    paddingHorizontal: 5,
    marginTop: 10,
    borderColor: '#4D455D',
    borderWidth: 2,
  },
  presstext: {
    color: '#7DB9B6',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
