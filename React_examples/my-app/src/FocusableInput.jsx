import { useEffect, useRef } from 'react'

export const FocusableInput = () => {
    const ref = useRef()
	const inputRef = useRef()

    useEffect(() => {
		if (!ref.current) {
			ref.current = true

			console.log('First render')
		}
	})

	useEffect(() => {
		inputRef.current?.focus()
	}, [])

	return (
		<div>
            <h1>My Focusable Input</h1>
			<input data-testid="one" name="one" ref={inputRef} />
		</div>
	)
}