import { configureStore } from '@reduxjs/toolkit';
import blogsApi from '~/apis/blogs.api';
import careersApi from '~/apis/careers.api';

const store = configureStore({
    reducer: {
        [blogsApi.reducerPath]: blogsApi.reducer,
        [careersApi.reducerPath]: careersApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            blogsApi.middleware,
            careersApi.middleware
        )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
