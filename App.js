

import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, FlatList, TouchableOpacity, Image, Modal } from 'react-native';
import TodoList from './TodoList';
import AddList from './AddList';

function App() {

    const [addTask, setvisible] = useState(false)
    const [notes, addNotes] = useState([])
    const [note, addNote] = useState("")
    function toggleAddTodoModal() {
        setvisible(!addTask);
    }

    return (

        <View style={styles.container}>
            <View>

                <Modal animationType="slide" visible={addTask} onRequestClose={() => toggleAddTodoModal()}>
                    <AddList closeModal={() => {
                        toggleAddTodoModal()

                    }}
                        set={(val) => {
                            addNote(val)
                        }}
                        update={() => {
                            let tasks = notes
                            tasks.push(note)
                            addNotes(tasks)
                            addNote("")
                        }
                        }
                        note={note}

                    />
                </Modal>
            </View>

            <View style={{ flexDirection: "row" }}>
                <View style={styles.divider} />
                <Text style={styles.title}>
                    Todo <Text style={{ fontWeight: "900", color: "#24A6d9" }}>Lists</Text>
                </Text>
                <View style={styles.divider} />
            </View>
            <View style={{ marginVertical: 48 }}>
                <TouchableOpacity

                    style={styles.addList}

                    onPress={() => {
                        toggleAddTodoModal()

                    }}

                >
                    <Image
                        source={require("./plus.png")}
                        style={{ width: 35, height: 35 }}
                    />
                </TouchableOpacity>
                <Text style={styles.add}> Add List</Text>
            </View>

            <View style={{ height: 300 }}>
                <FlatList



                    showsVerticalScrollIndicator={false}

                    data={notes}
                    renderItem={({ item, index }) => {
                        return (
                            <TodoList taskName={item}
                                deletes={() => {
                                    let _itemState = notes.filter(
                                        (_item, _index) => _index !== index
                                    );
                                    addNotes(_itemState);
                                }}
                            />
                        )
                    }}
                />

            </View>


        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "center",

    },
    divider: {
        backgroundColor: "#A7CBD9",
        height: 1.25,
        flex: 1,
        alignSelf: "center",

    },
    title: {
        fontSize: 38,
        fontWeight: "bold",
        color: "#2D3436",
        paddingHorizontal: 64,
    },
    addList: {
        alignSelf: "center",
    },
    add: {
        color: "#24A6d9",
        fontWeight: "bold",
        fontSize: 14,
        marginTop: 8,
    }
});

export default App;

