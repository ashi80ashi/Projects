import { configureStore } from '@reduxjs/toolkit'
import todofeature from './todoSlice'

const store = configureStore({
  reducer: {
    todo : todofeature
  }
})
export default store