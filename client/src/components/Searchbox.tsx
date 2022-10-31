import React, { ReactElement } from 'react'

function Searchbox(props: { triggerMethod: any }): ReactElement {

	const { triggerMethod } = props

	return(
		<div className="rounded-md shadow-sm drop-shadow-2xl flex">
			<label htmlFor="searchbox" className='bg-blend-normal'>Search:</label>
			<input onChange={triggerMethod} type="text" name="searchbox" id="searchbox" className="block w-full rounded-md pl-7 pr-12 focus:border-black-200 focus:ring-indigo-500" placeholder="what's the name of the card you are looking for?" />
		</div>
	)
}

export default Searchbox