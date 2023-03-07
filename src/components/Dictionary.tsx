import React, { useReducer } from 'react';

import { dictReducer, initialState } from '../reducers/dictReducer';
import SearchBar from './elements/Dictionary/SearchBar';
import DictionaryData from './elements/Dictionary/DictionaryData';
import { Variants, motion } from 'framer-motion';

const LoadingDot = {
  display: 'block',
  width: '2rem',
  height: '2rem',
  backgroundColor: 'black',
  borderRadius: '50%',
};

const LoadingContainer = {
  width: '10rem',
  height: '5rem',
  display: 'flex',
  justifyContent: 'space-around',
};

const ContainerVariants: Variants = {
  initial: {
    transition: {
      repeat: Infinity,
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      repeat: Infinity,
      staggerChildren: 0.2,
    },
  },
};

const DotVariants: Variants = {
  initial: {
    y: '0%',
  },
  animate: {
    y: '100%',
  },
};

const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: 'easeInOut',
};

const Dictionary: React.FC = () => {
  const [state, dispatch] = useReducer(dictReducer, initialState);

  const onSubmit = (e: any, word: string) => {
    if (word === '') {
      dispatch({ type: 'FETCH_DICT_FAILURE', payload: 'Please enter a word' });
      return;
    }
    dispatch({ type: 'FETCH_DICT_REQUEST' });
    e.preventDefault();
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
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

  return (
    <div className="mt-12 flex flex-col items-center justify-center">
      <SearchBar onSubmit={onSubmit} />

      {/* Error */}
      {state.error && <div className="mt-4 dark:text-[#eeeedd]">{state.error}</div>}

      {/* Loading */}
      {state.loading && (
        <div className="mt-4 flex w-[90vw] flex-col overflow-hidden rounded-3xl bg-[#eeeeff] p-4 dark:bg-[#0F3460] dark:text-[#eeeeff] sm:w-[80vw] md:w-[40rem]">
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
