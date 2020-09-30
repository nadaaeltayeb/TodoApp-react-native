import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, Image, TextInput, RefreshControl } from 'react-native';

function AddList(props) {


    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <TouchableOpacity style={{ position: "absolute", top: 40, right: 20 }} onPress={props.closeModal}>
                <Image
                    source={require("./close.png")}
                    style={{ width: 20, height: 20 }}
                />
            </TouchableOpacity>

            <View style={{ alignSelf: "stretch", marginHorizontal: 32 }}>
                <Text style={styles.title}>Create Note</Text>
                <TextInput style={styles.input} placeholder="Add Note"
                    onChangeText={(val)=>{
                        props.set(val)
                    }}
                />

                <TouchableOpacity style={styles.createBtn}
                    
                    onPress={
                        props.update
                    }
                    
                    
                >
                    <Text style={{ color: "white", fontWeight: "bold" }}>Create!</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "black",
        alignSelf: "center",
        marginBottom: 16,
    },
    input: {
        borderWidth: 0.25,
        borderColor: "#24A6d9",
        borderRadius: 10,
        height: 50,
        marginTop: 8,
        paddingHorizontal: 16,
        fontSize: 16
    },
    createBtn: {
        marginTop: 24,
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#24A6d9"
    }
});

export default AddList;