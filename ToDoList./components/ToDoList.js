import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';



const Todo = ({ initialValues }) => {
    const [todos, setToDos] = useState(initialValues.map((title) => ({ id: uuidv4(), name: title })));
    
    const addToDo = (newtitle) => {
        setToDos(prevToDos => [...prevToDos, { id: uuidv4(), 
            title: newtitle }]);
    };
    
    const removeToDo = id => {
        setToDos(prevToDos => prevToDos.filter(toDo => toDo.id !== id));
    };
    return (
    <View style={styles.todoListContainer}>
        {todos.map(Todo => (
        <View key={Todo.id} style={styles.todoItem}>
            <Text>{Todo.title}</Text>
            <Button title="Remove" onPress={() => removeToDo(Todo.id)} />
        </View>
        ))}
        <AddTask onAddTask={addToDo} />
    </View>
    );
};

Todo.defaultProps = {
    initialValues: [],
};

const styles = StyleSheet.create({
    todoListContainer: {
        margin: 10,
      },
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    },

});

export default Todo;