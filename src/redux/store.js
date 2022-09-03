import {configureStore} from '@reduxjs/toolkit';
import UserTypeReducer from './Slices/UserType';
import UtiltitiesReducer from './Slices/Utiltities';

const reducer = {
  UserType: UserTypeReducer,
  utiltities: UtiltitiesReducer,
};

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});
