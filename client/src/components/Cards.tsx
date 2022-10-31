import React, { ReactElement } from 'react'

function Cards(props: { data: any[]  }): ReactElement {
  const { data } = props

	return (
		<div className="flex flex-wrap">
          {data? data.map((card: any, key: number) => (
            <div key={ key } className={`h-14 h-80 min-w-60 max-w-400 m-5 p-2 flex from-inherit bg-indigo-500 shadow-lg shadow-indigo-500/50 bg-gradient-to-r from-green-400 ${ card.rarity === 'common'? 'to-blue-500': 'to-yellow-500'} hover:from-pink-500`} >
              {card && card.image_uris && card.image_uris.png? (<img src={ card.image_uris.png } className="mx-3"/>):(<></>)}
              
              <div className='flex flex-col'>
                <div className='text-white text-left text-xs'>Collector # { card.collector_number? card.collector_number: '' }</div>
                <div className='text-white text-left font-bold'>{ card.name? card.name: '' }</div>
                <div className='text-white text-left font-semibold'>{ card.set_name? card.set_name: '' }</div>
                <hr />
                <div className='text-white text-left'>{ card.rarity? card.rarity: '' }</div>
              </div>
          </div>
          )): null}
          
        </div>
	)
}

export default Cards