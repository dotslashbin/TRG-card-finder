import React, { ReactElement } from 'react'

function Cards(): ReactElement {
  const holder = [1,2,3,4,5,6,7,8, 9, 10, 11, 12]

	return (
		<div className="flex flex-wrap">
          {holder.map(() => (
            <div className='h-14 h-80 m-5 p-2 flex from-inherit bg-indigo-500 shadow-lg shadow-indigo-500/50 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ' >
              <img src='https://cards.scryfall.io/png/front/5/6/56b0f66b-dca9-4a01-9394-20a513c2b225.png?1660724670' className="mx-3"/>
              <div className='flex flex-col'>
                <div className='text-white text-left'>A-Young Blue Dragon // A-Sand Augury</div>
                <div className='text-white text-left'>Alchemy Horizons: Baldur's Gate</div>
                <div className='text-white text-left'>A-138</div>
                <div className='text-white text-left'>Common</div>
              </div>
          </div>
          ))}
          
        </div>
	)
}

export default Cards