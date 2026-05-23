# Auth Local Storage Update

## Summary

This update adds persistent authentication state to the frontend by saving user details in `localStorage` after successful register/login and restoring them automatically when the app loads.

## Files changed

- `Frontend/src/features/auth/auth.context.jsx`
  - Added `useEffect` to sync the `user` state with `localStorage`.
  - Initialized `user` state from `localStorage` when the auth provider mounts.
  - Added a `logout()` helper that clears the saved user.

- `Frontend/src/features/auth/hooks/useAuth.jsx`
  - Added `loginUser` import.
  - Saved user details to `localStorage` after successful `handleRegister()`.
  - Saved user details to `localStorage` after successful `handleLogin()`.
  - Normalized response handling for `response.user` and `response.User`.

- `Frontend/src/features/auth/auth.context.js`
  - Added a separate context module exporting `AuthContext`.
  - This keeps `auth.context.jsx` focused on the provider component and satisfies React refresh rules.

- `Frontend/src/App.jsx`
  - Fixed `useContext` usage and logout handling.
  - Corrected import path for `AuthContext`.

- `Frontend/src/components/Home.jsx`
  - Updated import path for `AuthContext`.
  - Removed unused auth API imports.

- `Frontend/src/features/tasks/Pages/Task.jsx`
  - Removed unused `useContext` import.

## What changed

- Registered or logged-in user details are now stored in `localStorage` under the key `user`.
- On page reload, the app restores the current user from `localStorage`, so the welcome message keeps the registered name instead of falling back to `Guest`.
- Logging out clears both `user` state and the persisted `localStorage` entry.
- Backend response handling was normalized to support both `user` and `User` payload shapes for compatibility.

## Notes

- The backend should return a consistent `user` object payload for both register and login.
- The frontend now uses the auth provider to manage local persistence without requiring manual reloads.
