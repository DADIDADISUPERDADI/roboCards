import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className="flex justify-center">
            <input className='w-50 pa3 ba bw2 b--green bg-lightest-blue'
            type="search" placeholder='search robots' name="" id=""
            onChange={searchChange}
            />
        </div>
    )
}


export default SearchBox;
