import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
const AddTodos = ({addTasks}) => {
  const [itemsInput, setItemsInput] = useState('');
  useEffect(() => {
    console.log(addTasks, 'taskhandler');
  }, []);
  const handlePress = () => {
    if (itemsInput.length > 0) {
      addTasks(itemsInput);
      setItemsInput('');
    } else {
      Alert.alert('Opps', 'can not submit an empty value', [
        {text: 'Understood', onPress: () => console.log('closed')},
      ]);
    }
  };
  return (
    <View>
      <TextInput
        placeholder="Add items...."
        value={itemsInput}
        onChangeText={value => setItemsInput(value)}
        style={styles.inputFiels}
      />
      <Button title="Add Tasks" onPress={() => handlePress()} />
    </View>
  );
};
const styles = StyleSheet.create({
  inputFiels: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
    color: '#000',
    borderRadius: 4,
  },
});
export default AddTodos;
