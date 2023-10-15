import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IUser,
  IUserCartData,
  IUserCartProduk,
} from "@/interfaces/user.interface";
import { currentDummyUser } from "@/data/user.data";

interface IUserSlice {
  userData: IUser;
}

const initialState: IUserSlice = {
  userData: currentDummyUser,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    mutateUserCartData: (state, action: PayloadAction<IUser>) => {
      state.userData = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { mutateUserCartData } = userSlice.actions;
