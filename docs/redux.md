# 关于redux
* **createStore**
* **combineReducers**
* **bindActionCreators**
* **applyMiddleware**
* **compose**
* **__DO_NOT_USE_ActionTypes**
## createStore
1. currentState就是rootReducer返回的结果，reducer是用户自己定义的，如果直接返回state，就是同一个引用；否者不是

## combineReducers
1. 返回结果是一个function：(state={}, action) => state
2. combineReducers返回的就是一个reducer，该reducer会根据是否有数据变化来决定是返回原state引用，或者返回新引用

## bindActionCreators
1. bindActionCreators只注入了一个dispatch
## applyMiddleware
1. applyMiddleware注入了dispatch和getState参数给middleware
2. redux-thunk把dispatch、getState、extraArgument注入了action
3. redux的middlwares基本上是三层高阶，第一层注入getState和dispatch参数；第二层注入store.dispatch参数；第三成注入action。执行顺序是按照从左到右（区别compose，从右到左组合）。
