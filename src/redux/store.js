import { configureStore } from "@reduxjs/toolkit";
import { posts } from "./api/sspost";
import { login } from "./api/login";
import { signUp } from "./api/signup";
import { referral } from "./api/referral";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import userReducer from "./slices/userSlice";
import resumeReducer from "./slices/resumeSlice";

import { profile } from "./api/profile";

export const store = configureStore({
  reducer: {
    user: userReducer,
    resume: resumeReducer,
    [posts.reducerPath]: posts.reducer,
    [login.reducerPath]: login.reducer,
    [signUp.reducerPath]: signUp.reducer,
    [profile.reducerPath]: profile.reducer,
    [referral.reducerPath]: referral.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // for perf reasons only in development mode!
    })
      .concat(posts.middleware)
      .concat(profile.middleware)
      .concat(login.middleware)
      .concat(signUp.middleware)
      .concat(referral.middleware),
});

setupListeners(store.dispatch);
