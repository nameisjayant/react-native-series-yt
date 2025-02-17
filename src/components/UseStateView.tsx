import {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const UseStateView = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <View style={styles.container}>
      <Button title="-" onPress={() => setCount(count - 1)} />
      <Text style={styles.text}>{count}</Text>
      <Button title="+" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    fontWeight: 500,
  },
});

export default UseStateView;
