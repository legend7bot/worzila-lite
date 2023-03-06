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
      <div className="relative flex h-10 w-[30rem] rounded-full bg-slate-200">
        <input
          className="h-10 shrink-0 basis-11/12 rounded-full bg-slate-200 p-1 pl-4 pr-10 text-sm focus:outline-none"
          key="search-bar"
          value={keyword}
          placeholder={'Search a Word...'}
          onChange={(e) => onChange(e.target.value)}
        />
        <span
          onClick={(e) => onSubmit(e, keyword)}
          className="absolute right-4 top-[50%] translate-y-[-50%] text-indigo-800">
          <FaSearch />
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
