
// 用户reducer
export function user(state = {payload: false}, action) {
  console.log('reducer -->', state, action)
  switch (action.type) {
    case "TEST":
      return {
        payload: true,
        message: action.result
      }
    default:
      return state
  }
}
