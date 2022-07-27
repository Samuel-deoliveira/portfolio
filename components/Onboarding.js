import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'

export default OnBoarding = () => {
    return (
        <View style={styles.container}>
            <FlatList />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})