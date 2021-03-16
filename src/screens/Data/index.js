import React, { Component } from 'react';
import { 
    View,
    StyleSheet,
} from 'react-native';
import { TitleComponent, DataComponent } from '../../component';

class DataScreen extends Component {
    render() {
        return(
            <View style={ styles.body }>
                <TitleComponent title="Data" />
                <DataComponent />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white',
    },

    title: {
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default DataScreen;