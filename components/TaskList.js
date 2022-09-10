import { View, FlatList, Text, StyleSheet, Pressable } from 'react-native';
/* import { Swipeable } from 'react-native-gesture-handler'; */
import GestureRecognizer from 'react-native-swipe-gestures';

import Container from './Container';

import { useSelector, useDispatch } from 'react-redux';
import { toggleTaskDone, deleteTask } from '../actions';

/* const DATA = [

    {
        id: 1,
        description: 'Task 1',
        isDone: false
    },
    {
        id: 2,
        description: 'Task 2',
        isDone: false
    },
    {
        id: 3,
        description: 'Task 3',
        isDone: true
    }
] */

/* const SwipeDelete = () => {
    return (
        <View
            style={styles.swipeDeleteView}
        >
            <Text
                style={styles.swipeDeleteText}
            >
                Delete
            </Text>
        </View>
    );
} */

const Item = ({ text, id, isDone }) => {
    const dispatch = useDispatch();
    return (
        <GestureRecognizer
        onSwipeRight={() => dispatch(deleteTask(id))}
        onSwipeLeft={() => dispatch(deleteTask(id))}>
            <Pressable onPress={() => dispatch(toggleTaskDone(id))}>
                <View style={[styles.taskListItem, { backgroundColor: isDone ? 'lightgreen' : 'lightgray' }]}>
                    <Text style={styles.taskListItemDescription}>{text}</Text>
                </View>
            </Pressable>
        </GestureRecognizer>
    );
}

const renderItem = ({ item, index }) => {
    return (<Item text={index + 1 + '. ' + item.description} id={item.id} isDone={item.isDone}
        key={item.id} />);
}

const TaskList = () => {

    const tasks = useSelector(state => state.tasks);

    return (
        <View style={{ flex: 1 }}>
            <FlatList data={tasks}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                scrollEnabled={true}
            /* contentContainerStyle ={{
                flexGrow: 1
            }} */
            />
        </View>
    )
}

const styles = StyleSheet.create({
    taskListItem: {
        marginVertical: 10,
        /* height: 60 */
    },
    taskListItemDescription: {
        fontSize: 20,
        textAlign: 'left',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    /* swipeDeleteView: {
        backgroundColor: '#ff8303',
        height: 60,
        marginVertical: 10,
    },
    swipeDeleteText: {
        color: '#1b1a17',
        paddingHorizontal: 10,
        fontWeight: '600',
        paddingHorizontal: 30,
        paddingVertical: 20,
    } */
});

export default TaskList;