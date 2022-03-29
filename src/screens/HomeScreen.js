import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


const HomeScreen = ({ navigation }) => {

    return (
        <View>
            <Text style={styles.title}>React native exercises</Text>
            <Button
                color="green"
                title="Activity Indicator Example"
                onPress={() => navigation.navigate("ActivityIndicatorScreen")}/>
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 25
    }
});

export default HomeScreen;
