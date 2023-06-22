import { FC } from "react";
import { useAuth } from "../hooks/useAuth";
import img from "../assets/protected-icon.webp";

interface Props {
  children: JSX.Element;
}

export const ProtectedRoute: FC<Props> = ({ children }) => {
  const isAuth = useAuth();

  return (
    <>
      {isAuth ? (
        children
      ) : (
        <div className="mt-20 flex flex-col items-center justify-center gap-10">
          <h1 className="text-2xl">You are not logged in</h1>
          <img className="w-1/3" src={img} alt="img" />
        </div>
      )}
    </>
  );
};
