/**
 * @desc 配置
 **/

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
//import { routerReducer, routerMiddleware } from 'react-router-redux'
import * as reducers from './reducers'

export default function configureStore() {
  const reducer = combineReducers({
    ...reducers,
    //routing: routerReducer
  })
  const store = createStore(
    reducer,
    compose(                   //整理
      applyMiddleware(         //中间件
        thunkMiddleware,       //支持分派异步
        //routerMiddleware(),  //路由
      ),
    ),
  )
  console.log('store --> ', store)
  return store
}
