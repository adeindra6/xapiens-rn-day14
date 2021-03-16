import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';
import axios from 'axios';
import { useState } from 'react';
import data_posts from '../../../posts.json';


const Item = ({ item, onPress }) => {
    <TouchableOpacity
        onPress={ onPress }
        style={ styles.btn }>
        <Text style={ styles.label }>{ item.title }</Text>
    </TouchableOpacity>
};

const DataComponent = () => {
    const [ selectedId, setSelectedId ] = useState(null);
    const [ posts, setPosts ] = useState(null);
    let data = [];

    console.log(data_posts[0].title);

    const getData = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                setPosts(response.data);
                data.push(response.data);
                console.log(data);
            }
        );
    };

    const renderItem = ({ item }) => {
        return(
            <Item
                item={ item }
                onPress={() => setSelectedId(item.id)}
            />
        );
    };

    return(
        <View style={ styles.body }>
            <Text style={ styles.title }>Data Posts</Text>
            <SafeAreaView>
                <FlatList
                    data={data_posts[0]}
                    renderItem={ renderItem }
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default DataComponent;