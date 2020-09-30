
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native';


Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
}


function TodoList(props) {
    return (
        <View style={styles.container}>
            <Text style={[styles.container, { backgroundColor: "#24A6d9" }]}>{props.taskName} </Text>
            <TouchableOpacity
                onPress={() => {
                    props.deletes();
                }
                }
            >
                <Image
                    source={require("./delete.png")}
                    style={{ width: 25, height: 25 }}

                />
            </TouchableOpacity>

        </View>




    )
};


const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 6,
        alignItems: "center",
        width: "97%",
        fontSize: 20,
        color: "white",
        flexDirection: "row",
    },

});

export default TodoList;




