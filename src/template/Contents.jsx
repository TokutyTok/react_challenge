export default function Contents(props) {
    const { message, style, list} = props
    return (
        <>
            <div>
                <p style={style}>
                    {message}
                </p>
            </div>
            <div>
                <ul>
                    {list && Object.entries(list).map(([key, value]) => (
                        <li key={key} style={{color: value}}>{key}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}