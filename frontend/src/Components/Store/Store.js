import {configureStore} from '@reduxjs/toolkit';
import userState from '../Store/Reducer/Reducer'
export const Store = configureStore({
    reducer: userState
})

export default Store;