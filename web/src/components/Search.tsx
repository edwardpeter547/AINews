
import banner from '../assets/images/banner.jpg';
import SearchInput from './Elements/SearchInput';
import Tags from './Elements/Tags';

const Search = () => {
  return (
    <div className='flex justify-center mt-8 flex-col px-[60px]'>
        <img src={banner} className='rounded-2xl'/>
        <SearchInput />
        <Tags />
    </div>
  )
}

export default Search