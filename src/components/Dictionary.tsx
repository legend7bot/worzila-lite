import React, { useReducer } from 'react';

import { dictReducer, initialState } from '../reducers/dictReducer';
import SearchBar from './elements/Dictionary/SearchBar';
import DictionaryData from './elements/Dictionary/DictionaryData';

const Dictionary: React.FC = () => {
  const [state, dispatch] = useReducer(dictReducer, initialState);

  const onSubmit = (e: any, word: string) => {
    dispatch({ type: 'FETCH_DICT_REQUEST' });
    e.preventDefault();
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => {
        if (!res.ok) {
          console.log('qwert');
          dispatch({ type: 'FETCH_DICT_FAILURE', payload: "Can't find the word" });
        } else {
          res.json().then((data) => {
            dispatch({ type: 'FETCH_DICT_SUCCESS', payload: data });
          });
        }
      })
      .catch(() =>
        dispatch({
          type: 'FETCH_DICT_FAILURE',
          payload: 'Some error occured | Please check your Internet',
        })
      );
  };

  return (
    <div className="mt-12 flex flex-col items-center justify-center">
      <SearchBar onSubmit={onSubmit} />
      {state.error && <div className="mt-4 dark:text-[#eeeedd]">{state.error}</div>}
      {state.loading && <div className="mt-4 dark:text-[#eeeedd]">Loading....</div>}
      <div className="flex flex-col">{state.dataReady && <DictionaryData data={state.data} />}</div>
    </div>
  );
};

export default Dictionary;
