import { useState } from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
	const [showAddTask, setShowAddTask] = useState(false);

	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Cita con el médico',
			day: '15 de Feb a las 8:30 am',
			reminder: true,
		},
		{
			id: 2,
			text: 'Reunión en la escuela',
			day: '16 de Feb a las 2:30 pm',
			reminder: true,
		},
		{
			id: 3,
			text: 'Hacer mercado',
			day: '15 de Feb a las 9:30 am',
			reminder: false,
		},
	]);

	// Añadir una tarea
	const addTask = task => {
		const id = Math.floor(Math.random() * 100) + 1;
		const newTask = { id, ...task };
		setTasks([...tasks, newTask]);
	};

	// Eliminar una Tarea
	const deleteTask = id => {
		setTasks(tasks.filter(task => task.id !== id));
	};

	// Agregar/Quitar Reminder
	const toggleReminder = id => {
		setTasks(
			tasks.map(task =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
	};

	return (
		<div className="container">
			<Header
				onAdd={() => setShowAddTask(!showAddTask)}
				showAdd={showAddTask}
			/>
			{showAddTask && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
			) : (
				'No hay tareas pendientes'
			)}
		</div>
	);
};

export default App;
