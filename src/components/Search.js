import React, { useState } from 'react'

export const Search = ({ searchText }) => {
    const [text, setText] = useState('');

    const formSubmitHandler = (e) =>{
        e.preventDefault();
        searchText(text);
    }
    return (
        <div className='max-w-sm rounded overflow-hidden mx-auto my-10'>
            <form onSubmit={formSubmitHandler} className='w-full max-w-sm'>
                <div className="flex item-center border-b border-teal-500 py-2">
                    <input onChange={e => setText(e.target.value)} type="text" className="appearance-none bg-transparent border-none w-full text-grey-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder='Search for Image...' />
                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 teaxt-sm border-4 teaxt-white py-1 px-2 rounded" type='submit'>Search</button>
                </div>
            </form>
        </div>
    )
}

export default Search;



