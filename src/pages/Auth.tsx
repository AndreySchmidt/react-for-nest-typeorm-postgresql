import { FC, useState } from "react";
import { AuthService } from "../services/auth.service";
import { toast } from "react-toastify";
import { setTokenToLocalStorage } from "../helpers/localstorage.helper";
import { useAppDispatch } from "../store/hooks";
import { login } from "../store/user/userSlice";
import { useNavigate } from "react-router-dom";

const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = await AuthService.registration({ email, password });

      if (data) {
        toast.success("Acc created");
        setIsLogin(!isLogin);
      }
    } catch (err: any) {
      const error = err.response?.data.message;
      toast.error(error.toString());
    }
  };

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = await AuthService.login({ email, password });

      if (data) {
        setTokenToLocalStorage("token", data.token);
        dispatch(login(data));

        toast.success("Logged in");
        navigate("/");
      }
      // return data;
    } catch (err: any) {
      const error = err.response?.data.message;
      toast.error(error.toString());
    }
  };

  return (
    <div className="mt-40 flex flex-col items-center justify-center bg-slate-900 text-white">
      <h1 className="mb-10 text-center text-xl">
        {isLogin ? "Login" : "Registration"}
      </h1>
      <form
        onSubmit={isLogin ? loginHandler : registrationHandler}
        className="gat-5 mx-auto flex w-1/3 flex-col"
      >
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="input"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="input"
          placeholder="Password"
        />
        <button className="btn btn-green mx-auto">Submit</button>
      </form>

      <div className="mt-5 flex justify-center">
        {isLogin ? (
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-slate-300 hover:text-white"
          >
            Account -
          </button>
        ) : (
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-slate-300 hover:text-white"
          >
            Account +
          </button>
        )}
      </div>
    </div>
  );
};

export default Auth;
