import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import googleImg from "../assets/signIn.png";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import Loading from "../Components/Loading";
const SocialLogin = () => {
  const { googleSignIn, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      const userInfo = {
        name: res.user?.displayName,
        email: res.user?.email,
        photo: res.user?.photoURL,
      };
      axios
        .post(`${import.meta.env.VITE_URL}/addUser`, userInfo)
        .then((res) => {
          console.log(res.data);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  if (loading) return <Loading></Loading>;
  return (
    <div className="w-full h-[200px] flex justify-center items-center">
      <div
        onClick={handleGoogleSignIn}
        className="flex lg:flex-row flex-col justify-between items-center lg:w-[90%] w-full mx-auto border p-3 rounded-full bg-white"
      >
        <div>
          <img className="lg:w-8 w-6" src={googleImg} alt="" />
        </div>
        <div className="text-[#333333] lg:text-lg text-base font-bold">
          Login With Google
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SocialLogin;
