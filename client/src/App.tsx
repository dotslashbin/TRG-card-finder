import React, { ReactElement, useEffect, useMemo, useState } from 'react';
import * as _ from 'lodash'
import axios from 'axios';

// CONFIG
import { API_SOURCE } from './config'

// Components
import Cards from './components/Cards'
import Menu from './components/Menu';
import Searchbox from './components/Searchbox';

function App(): ReactElement {

  const [ cardCollection, setCardCollection ] = React.useState<any>()
  const [ keywords, setKeywords ] = useState('')
  
  const handleSearch  = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeywords(event.target.value)
  }

  const debouncedChangeHandler = useMemo(
		() => _.debounce(handleSearch, 1200)
		, [])

  useEffect(() => {
    if(keywords) {
      axios.get(`http://${ process.env.REACT_APP_API_HOST }:${ process.env.REACT_APP_API_PORT }/${ API_SOURCE.search }?query=${ keywords }`)
      .then((result) => {
        const apiResult = result.data.results
        const { data } = apiResult

        setCardCollection(data)
      })
      .catch(error => console.error('DEBUG ....', 'Error in the axios call', error))
    }

  }, [keywords])

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
                  <Menu />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <Menu />
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
            <Searchbox triggerMethod={debouncedChangeHandler} />
          </div>
          
          <div className="p-2 sm:px-0">
            <Cards data={ cardCollection } />
          </div>
        </div>
      </main>
</div>
  );
}

export default App;
