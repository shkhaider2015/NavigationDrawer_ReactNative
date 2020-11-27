import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


class About extends React.Component {
    render() {
        return (
                <View style={styles.container} >
                    <Text>Profile</Text>
                </View>
        );
    }
}

export default About;

