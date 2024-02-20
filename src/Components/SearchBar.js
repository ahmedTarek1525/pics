import './SearchBar.css';
import {useState} from 'react';

function SearchBar( {onSubmit} ) {
   const [term , setterm] = useState('');


  const handleFormSubmit = (event) => {
     event.preventDefault();

  
      onSubmit(term);
  };
  
    const handleChange = (event) => {
      setterm(event.target.value);
    };

    return ( 
    <div className="search-Bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
           <input value={term} onChange={handleChange} />
      </form>
    </div>
    );
}
  export default SearchBar;