import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

export default function App() {

  const [task, setTask] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputLine}
          placeholder="Digite uma nova tarefa"
          onChangeText={setTask}
          value={task}
        />
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.inputText} >Adicionar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  inputLine: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    width: "75%",
    padding: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  inputText: {
    color: "white",
  },
});
