import * as React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

const ActivityIndicatorScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>First Exercise</Text>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center'
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
   
});

export default ActivityIndicatorScreen;










