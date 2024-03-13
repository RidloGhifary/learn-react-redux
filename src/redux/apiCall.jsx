import axios from "axios";
import { updateError, updateStart, updateSuccess } from "./userSlice";

export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const response = await axios.post(
      "http://localhost:5100/api/users/1/update",
      user
    );
    dispatch(updateSuccess(response.data));
  } catch (error) {
    dispatch(updateError());
  }
};
