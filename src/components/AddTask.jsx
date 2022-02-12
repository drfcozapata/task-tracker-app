import { useState } from 'react';

const AddTask = ({ onAdd }) => {
	const [text, setText] = useState('');
	const [day, setDay] = useState('');
	const [reminder, setReminder] = useState(false);

	const onSubmit = e => {
		e.preventDefault();

		if (!text) {
			alert('Antes de guardar, debe especificar una tarea');
			return;
		}
		if (!day) {
			alert('Por favor, indique fache y hora de la tarea');
			return;
		}

		onAdd({ text, day, reminder });
		setText('');
		setDay('');
		setReminder(false);
	};

	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>Tarea</label>
				<input
					type="text"
					placeholder="Añadir tarea"
					value={text}
					onChange={e => setText(e.target.value)}
				/>
			</div>
			<div className="form-control">
				<label>Fecha y Hora</label>
				<input
					type="text"
					placeholder="Formato: XX de Mes a las XX:XX am"
					value={day}
					onChange={e => setDay(e.target.value)}
				/>
			</div>
			<div className="form-control form-control-check">
				<label>Establecer Recordatorio</label>
				<input
					type="checkbox"
					checked={reminder}
					value={reminder}
					onChange={e => setReminder(e.currentTarget.checked)}
				/>
			</div>
			<input type="submit" value="Guardar Tarea" className="btn btn-block" />
		</form>
	);
};

export default AddTask;
