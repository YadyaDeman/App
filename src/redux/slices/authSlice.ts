import { createSlice, PayloadAction } from '@reduxjs/toolkit' 

// authentication - interface /
interface AuthState {
  isAuthenticated: boolean // if the user is authenticated /
  user: string | null // username or null - if not authenticated / 
}

// authentication slice / 
const initialState: AuthState = {
  isAuthenticated: false, // Default to not authenticated / 
  user: null, 
}

// Create the authentication slice / 
const authSlice = createSlice({
  name: 'auth', 
  initialState, 
  reducers: {
    // Login reducer -  user - authenticated / 
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true // authentication - true / 
      state.user = action.payload // Store the username / 
    },
    // Logout reducer - clears authentication  / 
    logout: (state) => {
      state.isAuthenticated = false // authentication - false / 
      state.user = null // Remove user data / 
    },
  },
})

// Export login and logout actions / 
export const { login, logout } = authSlice.actions

// Export the reducer to be used in the store /
export default authSlice.reducer
