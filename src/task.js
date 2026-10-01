export function addTask(TaskSignal, titulo) {
    const novaTarefa = {
        id: Date.now().toString(),
        title: titulo,
        done: false
    }
    const novaLista = [novaTarefa]
    for (let i=0; i < TaskSignal.length; i++) {
        novaLista.push(TaskSignal[i])
    }
    return novaLista;
}

export function toggleTask(tasks, id) {
    const novaLista = []

    for (let i=0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            novaLista.push({
                id: tasks[i].id,
                title: tasks[i].title,
                done: !tasks[i].done,
            })
        } else {
            novaLista.push({
                id: tasks[i].id,
                title: tasks[i].title,
                done: tasks[i].done,
            })
        }
    }
    return novaLista;
}

export function removeTask(tasks, id) {
    const novaLista = []

    for (let i=0; i < tasks.length; i++) {
        if (tasks[i].id != id) {
            novaLista.push(tasks[i])
        }
    }
    return novaLista;
}

export function contarConcluidos(tasks) {
    let total = 0;

    for (let i=0; i < tasks.length; i++) {
        if (tasks[i].done == true) {
            total += 1;
        }
    }
    return total;
}