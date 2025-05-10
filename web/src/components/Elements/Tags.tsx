import React, { useState } from 'react'
import { tagList } from '../../utils/Constants';

const Tags = () => {

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleSetActive = (index: number): void => {
        setActiveIndex(index);
    }

  return (
    <div>
        <ul className='flex gap-3 justify-center mt-5'>
            {tagList.map(({id, name}, index) => (
                <li onClick={() => handleSetActive(index)} className={`${index === activeIndex ? 'text-white bg-amber-700 px-[10px]': null} px-[10px] rounded-sm md:px-4 hover:cursor-pointer hover:border-[1px] hover:border-amber-700 transition-all duration-1000 ease-in-out`} key={id}>{name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Tags