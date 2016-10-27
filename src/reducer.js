
const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}


export class Reducer {
  constructor(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    default:
      return state
  }
}
}
