import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { authApi } from "@/api/authApi";
import { courseApi } from "@/api/courseApi";
import { purchaseApi } from "@/api/purchaseApi";
import { courseProgressApi } from "@/api/courseProgressApi";

export const appStore = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(
      authApi.middleware,
      courseApi.middleware,
      purchaseApi.middleware,
      courseProgressApi.middleware
    ),
});

const initializeApp = async () => {
  const result = await appStore.dispatch(
    authApi.endpoints.checkAuth.initiate(null, { forceRefetch: true })
  );

  // load profile ONLY if authenticated
  if ("data" in result) {
    appStore.dispatch(authApi.endpoints.loadUser.initiate());
  }
};

initializeApp();
