import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Dictionary: React.FC = () => {
  const BarStyle = { width: '20rem', background: '#F0F0F0', border: 'none', padding: '0.5rem' };

  const [keyword, setKeyword] = React.useState<string>('');

  const [data, setData] = React.useState<any>([]);

  const [loading, setLoading] = React.useState<boolean>(false);

  const [error, setError] = React.useState<string>('');

  const onChange = (value: string) => {
    setKeyword(value);
  };

  const onSubmit = (e: any) => {
    setLoading(true);
    e.preventDefault();
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`)
      .then((res) => {
        console.log('res', res);
        if (!res.ok) {
          setError('No results found');
          setLoading(false);
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="relative inline-block">
        <input
          style={BarStyle}
          key="search-bar"
          value={keyword}
          placeholder={'Search a Word...'}
          onChange={(e) => onChange(e.target.value)}
        />
        <span
          onClick={onSubmit}
          className="absolute right-0 top-[50%]">
          <FaSearch />
        </span>
      </div>
      {data?.length > 0 && data[0].meanings[0].definitions[0].definition}
      <div className="text-white">{error}</div>
    </div>
  );
};

export default Dictionary;
