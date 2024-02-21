import { Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

export default function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);


  const addTask = () => {
    if (task.trim().length > 0) {
      setTasks([...tasks, {
        id: Math.random().toString(),
        value: task
      }]);
      setTask("");
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>

        <TextInput
          style={styles.inputLine}
          placeholder="Digite uma nova tarefa"
          onChangeText={setTask}
          value={task}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={addTask}
        >
          <Text style={styles.inputText} >Adicionar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listTitle}>
        {tasks.length === 0 ? (
          <Text style={styles.empyList}>Nenhuma Tarefa Cadastrada</Text>
        ) : (
          <Text style={styles.filterlist}>Tarefas Cadastradas</Text>
        )}
      </View>

      <ScrollView style={styles.scrollList} showsVerticalScrollIndicator={false}>
        {tasks.map((task) => (
          <View
            key={task.id}
            style={styles.listItem}
          >
            <Text style={styles.widthText}>{task.value}</Text>
            <TouchableOpacity
              onPress={() => removeTask(task.id)}
              style={styles.removeButton}
            >
              <Text className={`text-white`}>Remover</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  form: {
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
  listTitle: {
    marginBottom: 10,
  },
  empyList: {
    textAlign: "center",
    color: "red",
  },
  filterlist: {
    textAlign: "center",
    color: "green",
    fontSize: 20,
  },
  scrollList: {
    marginBottom: 24,
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 10,
  },
  widthText: {
    width: "75%",
  },
  removeButton: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 5,
  },
});
