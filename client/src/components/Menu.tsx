import React, { ReactElement } from 'react'

function Menu():ReactElement {
	return (
		<>
			<a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>
			<a href="https://github.com/dotslashbin" target="_blank" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Josh's Github</a>
			<a href="https://www.linkedin.com/in/joshuafuentes/" target="_blank" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Linked In</a>
			<a href="mailto: joshuarpf@gmail.com" target="_blank" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
		</>
	)
}

export default Menu