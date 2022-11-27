import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>My - Todos</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: 'coral',
    padding: 20,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default Header;
