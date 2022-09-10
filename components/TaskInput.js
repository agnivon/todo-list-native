import { StyleSheet, TextInput, Button, View, Keyboard } from 'react-native';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addNewTask } from '../actions';

import Container from './Container';

const TaskInput = () => {

    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    return (
        <Container space={0}>
            <TextInput
                style={styles.input}
                placeholder="Enter new task"
                value={input}
                onChangeText={setInput}
            />
            <Button title="Add Task" style={styles.button}
                onPress={() => {
                    if (input) {
                        dispatch(addNewTask(input));
                        setInput('');
                        Keyboard.dismiss();
                    }
                }} />
        </Container>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        borderWidth: 1,
        padding: 10,
        fontSize: 20,
        flexGrow: 2,
        marginVertical: 10
    },
    button: {
        flexGrow: 1,
        marginVertical: 10
    }
});

export default TaskInput;