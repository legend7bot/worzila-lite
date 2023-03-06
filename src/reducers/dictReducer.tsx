interface DictState {
  data: any[];
  loading: boolean;
  error: string;
  dataReady: boolean;
}

export const initialState: DictState = {
  data: [],
  loading: false,
  error: '',
  dataReady: false,
};

export const dictReducer = (state: DictState = initialState, action: any) => {
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
