import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state of the category
interface CategoryState {
	selectedCategory: string | null;
}

const initialState: CategoryState = {
	selectedCategory: "total", // Default category
};

const categorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {
		setCategory: (state, action: PayloadAction<string>) => {
			state.selectedCategory = action.payload;
			console.log(action.payload);
		},
	},
});

// Export the action to be used in components
export const { setCategory } = categorySlice.actions;

// Export the reducer to be included in the store
export default categorySlice.reducer;
