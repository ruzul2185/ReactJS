import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || "",
  loading: false,
  error: null,
};

// emilys : emilyspass

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      console.log(username, password);
      const response = await fetch("https://dummyjson.com/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await response.json();
      //   console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      (state.token = ""), (state.loading = false), (state.error = null);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, actions) => {
        state.token = actions.payload.accessToken;
        state.loading = false;
        state.error = null;
        localStorage.setItem("token", actions.payload.accessToken);
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.rejected, (state, actions) => {
        state.loading = false;
        state.error = "Something went wrong!";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
