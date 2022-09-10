import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const TasksCompleted = () => {

    const tasks = useSelector(state => state.tasks);

    const tasksDone = tasks.reduce((acc, task) => task.isDone ? acc + 1 : acc, 0);
    const totalTasks = tasks.length;


    return (
        <View style={{ marginVertical: 10 }}>
            <Text>{tasksDone}{'/'}{totalTasks} tasks completed</Text>
        </View>
    )
}

export default TasksCompleted;