import React, { useEffect, useReducer } from 'react';

import { dictReducer, initialState } from '../reducers/dictReducer';
import SearchBar from './elements/Dictionary/SearchBar';
import DictionaryData from './elements/Dictionary/DictionaryData';
import { Variants, motion } from 'framer-motion';

const Dictionary: React.FC = () => {
  const [state, dispatch] = useReducer(dictReducer, initialState);

  //NOTE: For controlling the API request.
  let controller: AbortController;

  const onSubmit = (e: any, word: string) => {
    e.preventDefault();
    //NOTE: This will prevent the user from entering an empty string.
    if (word === '') {
      dispatch({ type: 'FETCH_DICT_FAILURE', payload: 'Please enter a word' });
      return;
    }

    //NOTE: For fetching the data from the API.

    controller = new AbortController();
    const signal = controller.signal; //NOTE: For controlling the request if component unmounts. If you're using axios, you can use the cancelToken instead.

    dispatch({ type: 'FETCH_DICT_REQUEST' });
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, { signal })
      .then((res) => {
        if (!res.ok) {
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

  useEffect(() => {
    return () => {
      //NOTE: For aborting the request if component unmounts.
      controller?.abort();
    };
  }, []);

  return (
    <div className="mt-12 flex flex-col items-center justify-center">
      <SearchBar onSubmit={onSubmit} />

      {/* Error */}
      {state.error && <div className="mt-4 dark:text-[#eeeedd]">{state.error}</div>}

      {/* Loading */}
      {state.loading && (
        <div className="mt-4 flex w-[90vw] flex-col overflow-hidden rounded-3xl bg-[#e8f3d6] p-4 dark:bg-[#0F3460] dark:text-[#eeeeff] sm:w-[80vw] md:w-[40rem]">
          <div className="mb-4 flex break-words text-6xl md:text-7xl">Loading...</div>
        </div>
      )}

      <motion.div
        transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}
        className="flex flex-col">
        {state.dataReady && <DictionaryData data={state.data} />}
      </motion.div>
    </div>
  );
};

export default Dictionary;
