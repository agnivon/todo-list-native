import { StyleSheet, View } from 'react-native';

const FlexContainer = ({children}) => {
    return (
        <View style={styles.container}>{children}</View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        padding: 15
    },
});

export default FlexContainer;