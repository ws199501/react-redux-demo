
export function getUser(opt = {}) {
  return (dispatch) => {
    console.log('action -->',dispatch)
    dispatch({ type: "TEST", result: "我是得到原始的user信息，啦啦啦～" })
  }
}

export function changeUser(opt = {}) {
  return (dispatch) => {
    dispatch({ type: "TEST", result: opt })
  }
}
