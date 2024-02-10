import { useEffect, useState } from 'react'

export const useDebounce = (value: string, delay?: number) => {
	const [debounced, setDebounce] = useState<string>(value)

	useEffect(() => {
		const time = setTimeout(() => {
			setDebounce(value)
		}, delay || 400)

		return () => clearTimeout(time)
	}, [value, delay])

	return debounced
}
