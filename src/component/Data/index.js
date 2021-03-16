import React, { Component, useState, useEffect } from 'react';
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
    StyleSheet,
    FlatList,
    ScrollView,
} from 'react-native';
import axios from 'axios';

const Item = ({ item, onPress }) => (
    <TouchableOpacity
        onPress={ onPress }
        style={ styles.btn }>
        <Text style={ styles.label }>{ item.title }</Text>
    </TouchableOpacity>
);

const DataComponent = () => {
    const [ selectedId, setSelectedId ] = useState(null);
    const [ posts, setPosts ] = useState(null);

    const getData = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                setPosts(response.data);
            }
        );
    };

    useEffect(() => {        
        getData();
    }, []);

    const renderItem = ({ item }) => {
        return(
            <Item
                item={ item }
                onPress={() => setSelectedId(item.id)}
            />
        );
    };

    return(
        <View>
            <Text style={ styles.subtitle }>Data Posts</Text>
            <ScrollView>
                <SafeAreaView>
                    <FlatList
                        data={ posts }
                        renderItem={ renderItem }
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}
                    />
                </SafeAreaView>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    subtitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },

    btn: {
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#5db075',
        width: '80%',
        alignSelf: 'center',
    },

    label: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default DataComponent;