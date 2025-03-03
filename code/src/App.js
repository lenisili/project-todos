import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'

import AddToDo from './components/AddToDo'
import ToDoList from './components/ToDoList'
import Header from './components/Header'

const reducer = combineReducers({
  todos: todos.reducer,
})

const store = configureStore({ reducer: reducer })

//mounting the created components
export const App = () => {
  return (
  <Provider store={store}>
    <Header />
    <AddToDo />
    <ToDoList />
  </Provider>
  )
}
