import {searchInputStyles} from './elements.styles'
import { IoSearchOutline } from 'react-icons/io5'


const SearchInput = () => {

    

  return (
    <div className={searchInputStyles.searchContainer()}>
        <IoSearchOutline className='text-[20px] hover:text-red-800 hover:cursor-pointer'/>
        <input className={searchInputStyles.textInput()} type='text' placeholder='Search'></input>
    </div>
  )
}

export default SearchInput