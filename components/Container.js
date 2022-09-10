import { StyleSheet, View } from "react-native";

const Container = ({space=10, children}) => {
    return(
        <View style={[styles.container, { marginVertical: space}]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
});

export default Container;