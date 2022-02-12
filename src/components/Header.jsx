import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
	return (
		<header className="header">
			<h1>{title}</h1>
			<Button
				color={showAdd ? 'red' : 'green'}
				text={showAdd ? 'Cerrar' : 'Añadir'}
				onClick={onAdd}
			/>
		</header>
	);
};

Header.defaultProps = {
	title: 'Rastreador de Tareas',
};

export default Header;
