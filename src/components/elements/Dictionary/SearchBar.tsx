import React from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
  onSubmit: (e: any, word: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [keyword, setKeyword] = React.useState<string>('');

  const onChange = (value: string) => {
    setKeyword(value);
  };
  return (
    <div>
      <div className="relative flex h-16 w-[90vw] items-center justify-evenly rounded-full bg-[#eeeeee] p-1 dark:bg-[#0F3460] lg:w-[50rem]">
        <form
          className="w-full rounded-full"
          onSubmit={(e) => {
            onSubmit(e, keyword);
          }}>
          <input
            className="h-16 w-[100%] rounded-full bg-[#eeeeee] p-1 pl-4 text-xl tracking-wide text-[#1A1A2E] focus:outline-none dark:bg-[#0F3460] dark:text-[#eeeeff]"
            key="search-bar"
            value={keyword}
            placeholder={'Search a Word...'}
            onChange={(e) => onChange(e.target.value)}
          />
        </form>
        <div
          onClick={(e) => onSubmit(e, keyword)}
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-indigo-800 hover:scale-125 hover:cursor-pointer dark:text-[#eeeeee]">
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
