import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { style } from "./style";
import { useState, useEffect } from "react";
import { addTask, toggleTask, removeTask, contarConcluidos } from './task'
import { salvarTarefas, carregarTarefas} from './storage'



export default function App() {
    const [tasks, setTasks] = useState([])
    const [text, setText] = useState('')
    const [concluidas, setConcluidas] = useState(0)

    async function iniciar() {
        const tarefas = await carregarTarefas();
        const done = await contarConcluidos(tarefas);
        setTasks(tarefas)
        setConcluidas(done)
    }

    useEffect(function() {
        iniciar()
    }, []);

    useEffect(function () {
        salvarTarefas(tasks)
    }, [tasks])

    function add() {
        const novaLista = addTask(tasks, text)
        setTasks(novaLista)
        setText('')
    }

    function toggle(id) {
        const novaLista = toggleTask(tasks, id)
        setTasks(novaLista)
        const done = contarConcluidos(novaLista)
        setConcluidas(done)
    }

    function remover(id) {
        const novaLista = removeTask(tasks, id)
        setTasks(novaLista)
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>Meus Estudos</Text>
            <Text style={style.subtitle}>
                {concluidas} de {tasks.length} concluidas
            </Text>

            <View style={style.inputRow}>

                <TextInput
                    style={style.input}
                    placeholder="Nova tarefa"
                    value={text}
                    onChangeText={setText}
                    onSubmitEditing={add} 
                    returnKeyType="done" />

                <TouchableOpacity style={style.addButton} onPress={add}>
                    <Text style={style.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>

        <FlatList
            data={tasks}
            keyExtractor={(task) => task.id}
            renderItem={({ item }) => (
                <View style={style.taskItem}>
                    <TouchableOpacity onPress={() => toggle(item.id)} style={style.taskLeft}>

                        <View style={[
                            style.checkbox,
                            item.done ? style.checkboxDone : null
                        ]}>
                            {item.done ? (
                                <Text style={style.checkmark}>
                                    ✓
                                </Text>
                            ) : null}
                        </View>

                        <Text style={[
                            style.taskText,
                            item.done ? style.taskTextDone : null
                        ]}>
                            {item.title}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => remover(item.id)}>
                        <Text style={style.remove}>x</Text>
                    </TouchableOpacity>
                </View>
            )}
            />

        </View>
    );
}