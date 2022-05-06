import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const AuthDisplay: React.VFC = () => {
  const auth = useContext(AuthContext);
  return <div>{auth?.userAuth ? <p>ログイン中</p> : <p>未ログイン</p>}</div>;
};
