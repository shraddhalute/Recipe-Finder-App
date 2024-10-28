import React from 'react'
import { useState } from 'react'
import Products from './Products';
const Page = () => {
    const [Search, setSearch] = useState('');
    const [data, setdata] = useState([]);
    const YOUR_APP_ID="e7127d20";
    const YOUR_APP_KEY = "7ea0fd9c6903bcba70707b275aa61e75"
    const submitHandler=e=>{
      e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${Search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`).then(
        response =>response.json()    
    ).then(data=>setdata(data.hits))
      
    }
    
  return (
 
    <div className='page'>
        <h5>FOOD RECIPE APP</h5>
        <form onSubmit={submitHandler}>
            <input type='text' value={Search}  onChange={(e) =>setSearch(e.target.value)}   placeholder='Enter the Recipe'  />
            <input type='submit' className='btn btn-primary' value="Search"  />
            
        </form>
        {data.length>=1 ?<Products data={data} /> :null}
    </div>
  )
}

export default Page
