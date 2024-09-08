import { createSlice, createSelector, configureStore } from '@reduxjs/toolkit';

const main = createSlice({
  name: 'main',
  initialState: {
    loading: true,
    profile: null
  },
  reducers: {
    setMain(state, action) {
      return { ...state, ...action.payload }
    },
    setProfile(state, action) {
      state.profile = action.payload;
    }
  }
});

const { actions, reducer } = main;

const store = configureStore({
  reducer: reducer
})

export const { setMain, setProfile } = actions;
export const { dispatch } = store;
export default store

const selectState = (state) => state;

export const selectorLoading = createSelector(
  selectState,
  (state) => state.loading
);

export const selectorProfile = createSelector(
  selectState,
  (state) => state.profile
);