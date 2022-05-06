import React from "react";
import { AuthButton } from "./AuthButton";
import { AuthDisplay } from "./AuthDisplay";

export const UserAuth: React.VFC = () => {
  return (
    <div>
      <h4>ユーザー認証</h4>
      <AuthButton />
      <AuthDisplay />
    </div>
  );
};
