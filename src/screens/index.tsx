import { Alert, FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../components/Header";
import { Task } from "../components/Task";
import { useState } from "react";
import { TaskDTO } from "../dtos/TaskDTO";
import { Empty } from "../components/Empty";
import { uuid } from "../utils/uuid";

export function HomeScreen() {
     const [newTask, setNewTask] = useState(' ')
     const [tasks, setTasks] = useState<TaskDTO[]>([])  

    function handleTaskAdd(){
      
        if (newTask !== '' && newTask.length >= 5){
            setTasks((tasks) => [...tasks,{id: uuid(), isCompleted: false, title: newTask.trim()}])
        }
         setNewTask('');
    }
    function handleTaskDone(id: string){
        setTasks((task) => task.map((task) => {
            task.id === id ? (task.isCompleted = !task.isCompleted) : null
            return task
        }))
    }
    function handleTaskDelete(id: string){
       Alert.alert('Excluir Tarefa','Deseja excluir essa tarefa?', [
        {
            text: 'Sim',
            style: 'default',
            onPress: () => 
                setTasks((tasks) => tasks.filter((task) => task.id !== id)),
        },
        {   
            text: 'Não',
            style: 'cancel',
        },
       ])
    }

    const TotalTasksCreated = tasks.length //Passa o tamanho do array de tarefas criadas
    const TotalTasksCompleted = tasks.filter(({isCompleted}) => isCompleted).length //Passa somente as tarefas completas filtradas 

    return <View style={styles.container}>
        <Header task={newTask} onChangeText={setNewTask} onPress={handleTaskAdd}/>
        <View style={styles.taskContainer}>
            <View style={styles.info}>
                <View style={styles.row}>
                    <Text style={styles.tasksCreated}>
                        Criadas
                    </Text>
                    <View style={styles.counterContainer}>
                        <Text style={styles.counterText}>{TotalTasksCreated}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.tasksDone}>
                        Concluídas
                    </Text>
                    <View style={styles.counterContainer}>
                        <Text style={styles.counterText}>{TotalTasksCompleted}</Text>
                    </View>
                </View>
            </View>

            <FlatList 
                data={tasks}
                keyExtractor={(tasks) => tasks.id}//! dizendo ao TypeScript que o id vira pelo keyExtractor
                renderItem={({ item }) => (
                    <Task
                        key={item.id}
                        onTaskDone={() => handleTaskDone(item.id)}
                        onTaskDelete={() => handleTaskDelete(item.id)}
                        {...item}
                    />
                )}
                ListEmptyComponent={<Empty />} //propriedade que renderiza componente Empty em caso de nenhum valor na lista
            
            />

            
        </View>
    </View>
}