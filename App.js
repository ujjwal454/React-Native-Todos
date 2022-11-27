import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodos from './components/AddTodos';
const App = () => {
  const [inputField, setInputField] = useState('');
  const [taskList, setList] = useState([]);
  const addTasks = newTask => {
    setList([newTask, ...taskList]);
  };
  const handlePress = item => {
    const newList = taskList.filter(task => task !== item);
    setList(newList);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.mainContainer}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* form  */}
          <AddTodos addTasks={addTasks} />
          {/* list */}
          <View style={styles.list}>
            {taskList.length > 0 && (
              <FlatList
                data={taskList}
                renderItem={({item}) => (
                  <TodoItem item={item} pressHandler={handlePress} />
                )}
              />
            )}
            {taskList.length === 0 && (
              <Text style={styles.emptyitem}>Added items appear here</Text>
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
    marginBottom: 20,
  },
  emptyitem: {
    color: '#4d4d4d4d',
    textAlign: 'center',
  },
});
export default App;
