const {
	applyMiddleware,
	configureStore,
	getDefaultMiddleware,
} = require('@reduxjs/toolkit');
const { default: rootReducer } = require('./rootReducer');

const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
