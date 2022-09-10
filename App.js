import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FlexContainer from './components/FlexContainer';
import Container from './components/Container';
// import Separator from './components/Separator';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TasksCompleted from './components/TasksCompleted';

import store from './store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <FlexContainer>
        <Container space={0}>
          <Text style={styles.h1}>Todo List</Text>
        </Container>
        <TasksCompleted />
        <TaskList />
        <TaskInput />
        <StatusBar style="auto" />
      </FlexContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  }
});


