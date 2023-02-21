import React from 'react'
import Data from './Data';
const SearchOutput = ({ googledata }) => {
    console.log(googledata);
    return (
        <>
            
            <p>About {googledata.searchInformation.totalResults} results in {googledata.searchInformation.formattedSearchTime} sec</p>
            
            {googledata?.items.map((data, id) => (<Data data={data} key={id} />))}
        </>
    )
}

export default SearchOutput