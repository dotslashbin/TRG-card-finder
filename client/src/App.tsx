import React, { ReactElement } from 'react';
import './App.css';


function App(): ReactElement {

  const holder = [1,2,3,4,5,6,7,8, 9, 10, 11, 12]

  return (
    <div className="min-h-full App">
  <nav className="bg-gray-800">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Josh's Github</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Linked In</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Him</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="md:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
        <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Josh's Github</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Linked In</a>
        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact Him</a>
      </div>
    </div>
  </nav>

  <header className="bg-white shadow">
    <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">TCG Card searcher</h1>
    </div>
  </header>
  <main>
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div className="my-10">
        <div className="rounded-md shadow-sm drop-shadow-2xl flex">
          <label htmlFor="searchbox" className='bg-blend-normal'>Search:</label>
          <input type="text" name="searchbox" id="searchbox" className="block w-full rounded-md pl-7 pr-12 focus:border-black-200 focus:ring-indigo-500" placeholder="what's the name of the card you are looking for?" />
        </div>
      </div>
      <div className="px-4 py-6 sm:px-0">
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
      </div>
    </div>
  </main>
</div>
  );
}

export default App;
