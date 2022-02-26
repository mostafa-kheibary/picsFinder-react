import './Search.css'
const Search = () => {
  return (
    <div className='search'>
      <form>
        <input placeholder='search anything you want' className='search-input' type='text' />
        <i className='fa-solid fa-magnifying-glass search-icon'></i>
      </form>
    </div>
  );
};

export default Search;
