// export const API_KEY = 'AIzaSyBZKG82insjx3bQIh0weX_J-VeA5VCsxdo';


// <script async src="https://cse.google.com/cse.js?cx=a3d5c9a79917846e6">
// </script>
// <div class="gcse-search"></div> 

// const searchIngineID = 'a3d5c9a79917846e6';


// const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

// const ENGINE_ID = process.env.REACT_APP_GOOGLE_SEARCH_ENGINE_ID;

const API_KEY = 'AIzaSyBZKG82insjx3bQIh0weX_J-VeA5VCsxdo';
const ENGINE_ID = 'a3d5c9a79917846e6';

export const searchData = async( term ) => {
    const data  = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${ENGINE_ID}&q=${term}`);
    const result = data.json();
    return result;
}