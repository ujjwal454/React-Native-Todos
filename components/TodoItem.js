import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import trash from '../images/trash.png';
const TodoItem = ({item, pressHandler}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{item}</Text>
      <TouchableOpacity onPress={() => pressHandler(item)}>
        <Image source={trash} style={styles.trash} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    color: '#000',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    color: '#000',
  },
  trash: {
    width: 20,
    height: 20,
  },
});

export default TodoItem;
