
import './search.style.css';

export const Search = (props) => {
    return (
        <input className='search-box' type="search" placeholder="search monsters" onChange={props.handleChange} />
    )
}
