import React from 'react'
import {lang} from '../utils/languageConstant';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const gpt = useSelector((state) => state.config);
  
  const { lang: language } = gpt;

  return (
    <div className='pt-[10%] flex justify-center'>
         
        <form className="bg-black p-2 w-1/2 grid grid-cols-12">
        <input type='text' className="p-2 m-2 col-span-9 rounded-lg" name="search" placeholder={lang?.[language]?.searchPlaceholder} />
        <button className="mt-2 p-2 m-2 bg-red-800 text-white col-span-3 py-2 px-4 rounded-lg ml-2">{lang?.[language]?.search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar