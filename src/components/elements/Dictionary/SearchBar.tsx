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
      <div className="relative flex h-16 rounded-full bg-[#eeeeee] dark:bg-[#0F3460] md:w-[50rem]">
        <form
          className="shrink-0 basis-[100%]"
          onSubmit={(e) => {
            onSubmit(e, keyword);
          }}>
          <input
            className="h-16 w-[95%] rounded-full bg-[#eeeeee] p-1 pl-4 pr-10 text-xl text-[#1A1A2E] focus:outline-none dark:bg-[#0F3460] dark:text-[#eeeeff]"
            key="search-bar"
            value={keyword}
            placeholder={'Search a Word...'}
            onChange={(e) => onChange(e.target.value)}
          />
        </form>
        <span
          onClick={(e) => onSubmit(e, keyword)}
          className="absolute right-1 top-[50%] flex h-14 w-14 translate-y-[-50%] items-center justify-center rounded-full text-indigo-800 hover:scale-125 hover:cursor-pointer dark:text-[#eeeeee]">
          <FaSearch />
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
