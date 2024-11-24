export default function Contents(props) {
    const { message, style } = props
    return (
        <div>
            <p style={style}>
                {message}
            </p>
        </div>
    )
}