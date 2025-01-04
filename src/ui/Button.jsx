export default function Button(props) {
	const { name, onClickEvent } = props
	return (
		<div>
			<button onClick={onClickEvent}>{name}</button>
		</div>
	)
}
