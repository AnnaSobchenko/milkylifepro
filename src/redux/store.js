import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authSlice";
import usersReducer from "./user/userSlice";
import pricesReducer from "./prices/pricesSlice";
import reviewsReducer from "./reviews/reviewsSlice";
import themeReducer from "./theme/themeSlice";
import langReducer from "./lang/langSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const usersPersistConfig = {
  key: "users",
  storage,
  whitelist: ["users"],
};
const pricesPersistConfig = {
  key: "prices",
  storage,
  whitelist: ["prices"],
};
const reviewsPersistConfig = {
  key: "reviews",
  storage,
  whitelist: ["reviews"],
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);
const usersPersistedReducer = persistReducer(usersPersistConfig, usersReducer);
const pricesPersistedReducer = persistReducer(
  pricesPersistConfig,
  pricesReducer
);
const reviewsPersistedReducer = persistReducer(
  reviewsPersistConfig,
  reviewsReducer
);

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["theme", "lang"],
};

const rootReducer = combineReducers({
  auth: authPersistedReducer,
  users: usersPersistedReducer,
  prices: pricesPersistedReducer,
  reviews: reviewsPersistedReducer,
  theme: themeReducer,
  lang: langReducer,
});
const rootPersistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: rootPersistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export default store;
