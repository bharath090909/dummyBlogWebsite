import { useContext } from "react";
import useInputHook from "../Hooks/InputHooks";
import { useNavigate } from "react-router-dom";
import Context from "../Store/Context";
import { auth, provider } from "../Firebase/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const { setIsLogged } = useContext(Context);
  const navigate = useNavigate();
  // const {
  //   reset: emailReset,
  //   jsx: emailjsx,
  //   hasError: emailHasError,
  //   inputIsValid: emailIsValid,
  // } = useInputHook({
  //   name: "email",
  //   type: "email",
  //   msg: `Email Should Contain "@"`,
  //   validateValue: (value) => value.includes("@"),
  // });

  // const {
  //   reset: passReset,
  //   jsx: passjsx,
  //   hasError: passHasError,
  //   inputIsValid: passIsValid,
  // } = useInputHook({
  //   name: "password",
  //   type: "password",
  //   msg: `Password Should not be empty`,
  //   validateValue: (value) => value.trim("@") !== "",
  // });

  // let formIsValid = false;
  // if (emailIsValid && passIsValid) {
  //   formIsValid = true;
  // }

  const submitHandler = () => {
    // if (emailHasError && passHasError) {
    //   return;
    // }
    signInWithPopup(auth, provider).then((result) => {
      setIsLogged(true);
      localStorage.setItem("isLogged", true);
      navigate("/");
    });

    // emailReset();
    // passReset();
  };

  return (
    <>
      <section className="bg-login-bg flex justify-center items-center h-[90vh] bg-no-repeat bg-cover bg-center ">
        <div className="bg-primary flex flex-col w-[25rem] h-[10rem] justify-center rounded-2xl ">
          {/* <form onSubmit={submitHandler} className="mt-4">
            {emailjsx}
            {passjsx}
            <button
              disabled={!formIsValid}
              className=" rounded-xl py-2 text-center w-[15rem] my-5 mx-[20%] bg-tertiary"
            >
              Log in
            </button>
          </form> */}
          <h1 className="text-center text-2xl font-bold">
            Sign-In with Google to Continue
          </h1>
          <div className="flex items-center justify-center border-2  my-4 bg-[#d8d8d8]  mx-9">
            <FcGoogle size="25px" />
            <button className="ml-2" onClick={submitHandler}>
              Sign-In with Google
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
