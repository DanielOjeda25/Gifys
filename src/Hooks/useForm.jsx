import { useReducer } from 'react'

// constants for the reducer
const ACTIONS = {
  CHANGE_KEYWORD: 'change_keyword',
  CHANGE_RATING: 'change_rating'
}

const ACTIONS_REDUCERS = {
  [ACTIONS.CHANGE_KEYWORD]: (state, action) => ({
    ...state,
    times: state.times + 1,
    keyword: action.payload
  }),
  [ACTIONS.CHANGE_RATING]: (state, action) => ({
    ...state,
    rating: action.payload
  })
}

// creamos el reducer para controlar los estados
const reducer = (state, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type]
  return actionReducer ? actionReducer(state, action) : state
}

// creamos el hook
export default function useForm ({
  // seteamos los valores por defecto
  initialKeyword = '',
  initialRating = 'g'
} = {}) {
  const [{ keyword, rating }, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating
  })

  return {
    changeKeyword: ({ keyword }) =>
      dispatch({ type: ACTIONS.CHANGE_KEYWORD, payload: keyword }),
    changeRation: ({ rating }) =>
      dispatch({ type: ACTIONS.CHANGE_RATING, payload: rating }),
    keyword,
    rating
  }
}
