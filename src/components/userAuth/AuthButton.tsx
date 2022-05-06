import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const AuthButton: React.VFC = () => {
  const auth = useContext(AuthContext);
  console.log(auth);

  const handleSignOut = () => {
    auth?.setUserAuth(false);
  };

  const handleSignIn = () => {
    auth?.setUserAuth(true);
  };

  return (
    <div>
      {auth?.userAuth ? (
        <button onClick={handleSignOut}>ログイン</button>
      ) : (
        <button onClick={handleSignIn}>ログアウト</button>
      )}
    </div>
  );
};
