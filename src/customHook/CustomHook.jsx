import { useState } from 'react'

export default function useGoodCounter() {
	const [count, setCount] = useState(0)

	const incrementCount = () => setCount(count + 1)
	const decrementCount = () => setCount(count - 1)

	return [count, { setCount, incrementCount, decrementCount }]
}
