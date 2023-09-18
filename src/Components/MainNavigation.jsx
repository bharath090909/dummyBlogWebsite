import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../Store/Context";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase-config";

const MainNavigation = () => {
  const navigate = useNavigate();
  const { isLogged, setIsLogged } = useContext(Context);
  const logoutHandler = async () => {
    await signOut(auth).then(() => {
      localStorage.clear();
      setIsLogged(false);
      navigate("/login");
    });
  };
  return (
    <>
      <header className="w-full px-10 py-5 bg-primary flex items-center justify-between">
        <div>
          <img src="*" alt="logo"></img>
        </div>
        <nav>
          <ul className="flex gap-8 items-center">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {isLogged && (
              <li>
                <NavLink to="/createpost">Create Post</NavLink>
              </li>
            )}
            <li>
              {!isLogged ? (
                <button className="border-2 py-[0.5rem] px-[1rem] border-black rounded-2xl bg-tertiary text-secodary hover:bg-primary ">
                  <NavLink to="/login">Login</NavLink>
                </button>
              ) : (
                <button
                  onClick={logoutHandler}
                  className="border-2 py-[0.5rem] px-[1rem] border-black rounded-2xl bg-tertiary text-secodary hover:bg-primary "
                >
                  <NavLink to="/login">Logout</NavLink>
                </button>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainNavigation;
