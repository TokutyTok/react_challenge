export default function Input(props) {
    const {value, onChangeEvent} = props

    return (
        <div>
            <input value={value} onChange={onChangeEvent}/>
        </div>
    )
}