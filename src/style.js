import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f4f4f4'
    },
    title: {
        fontSize: 26,
        color: '#91254b',
        fontWeight: 'bold',
        marginTop: 40,
        marginLeft: 402
    },
    subtitle: {
        fontSize: 14,
        color: '#686868',
        marginBottom: 20,
        marginLeft: 402
    },
    inputRow: {
        flexDirection: 'row',
        marginBottom: 20,
        marginLeft: 400,
        marginRight: 400,
    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 8,
        fontSize: 16,
        borderWidth: 2,
        borderColor: '#91254b',
    },
    addButton: {
        backgroundColor: '#91254b',
        width: 50,
        marginLeft: 8,
        borderRadius: 8, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    addButtonText: {
        color: '#ffffff',
        fontSize: 24,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    taskItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        padding: 12,
        borderRadius: 8,
        marginTop: 8,
        marginLeft: 400,
        marginRight: 400
    },
    taskLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: '#91254b',
        borderRadius: 6,
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkboxDone: {
        backgroundColor: '#9abaa4',
        borderColor: '#9abaa4'
    },
    checkmark: {
        color: '#fff',
        fontWeight: 'bold'
    },
    taskText: {
        fontSize: 16,
        flexShrink: 1
    },
    taskTextDone: {
        textDecorationLine: "line-through",
        color: '#999'
    },
    remove: {
        color: '#91254b',
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 10
    }
})