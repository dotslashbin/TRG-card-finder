import React, { ReactElement } from 'react'

function Cards(props: { data: any[]  }): ReactElement {
  const { data } = props

	return (
		<div className="flex flex-wrap">
          {data? data.map((card: any, key: number) => (
            <div key={ key } className='h-14 h-80 min-w-60 max-w-400 m-5 p-2 flex from-inherit bg-indigo-500 shadow-lg shadow-indigo-500/50 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ' >
              {card.image_uris.png? (<img src={ card.image_uris.png } className="mx-3"/>):(<></>)}
              
              <div className='flex flex-col'>
                <div className='text-white text-left'>{ card.name }</div>
                <div className='text-white text-left'>{ card.set_name }</div>
                <div className='text-white text-left'>{ card.collector_number }</div>
                <div className='text-white text-left'>{ card.rarity }</div>
              </div>
          </div>
          )): null}
          
        </div>
	)
}

export default Cards