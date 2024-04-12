import { useRef } from "react";
import { login, logout, useDispatch } from "./store/reducers/authSlice.js";

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(login({
      user: "Giuseppe",
      token: "1234"
    }))
  }

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <>
        <button onClick={handleLogin}>LOGIN</button>
        <button onClick={handleLogout}>LOGOUT</button>
        <div>
          token: {auth.token || "no-token"}
          <br />
          user: {auth.user || "no-user"}
        </div>
    </>
  )
}

export default App;