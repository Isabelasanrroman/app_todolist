import AsyncStorage from "@react-native-async-storage/async-storage";

const  CHAVE = '@bob_esponja'

export async function carregarTarefas() {
    const dados = await AsyncStorage.getItem(CHAVE)

    if (dados === null) {
        return []
    } else {
        return JSON.parse(dados)
    }
}

export async function salvarTarefas(tasks) {
    const dados = JSON.stringify(tasks)
    await AsyncStorage.setItem(CHAVE, dados)
    
}