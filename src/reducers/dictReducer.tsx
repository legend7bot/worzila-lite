import { initialData } from '../assets/initialData';

interface DictState {
  data: any[];
  loading: boolean;
  error: string;
  dataReady: boolean;
}

interface DictAction {
  type: 'FETCH_DICT_REQUEST' | 'FETCH_DICT_SUCCESS' | 'FETCH_DICT_FAILURE';
  payload?: any;
}

export const initialState: DictState = {
  data: initialData,
  loading: false,
  error: '',
  dataReady: true,
};

export const dictReducer = (state: DictState = initialState, action: DictAction) => {
  switch (action.type) {
    case 'FETCH_DICT_REQUEST':
      return {
        ...state,
        loading: true,
        dataReady: false,
      };

    case 'FETCH_DICT_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
        dataReady: true,
      };

    case 'FETCH_DICT_FAILURE':
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
        dataReady: false,
      };

    default:
      return state;
  }
};
