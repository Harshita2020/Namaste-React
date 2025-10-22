import cartReducer from "./cartSlice";
// import loginReducer from "./loginSlice.js";

const { configureStore } = require("@reduxjs/toolkit");

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
