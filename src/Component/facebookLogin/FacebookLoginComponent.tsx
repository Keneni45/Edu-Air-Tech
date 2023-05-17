// import { LoginSocialFacebook } from "reactjs-social-login";
// import { loginWithFacebook } from "../../service/authService";
// import { persistUser } from "../../utils/utils";
// import axios from "../../api/axios";
// type socialProp = {
//   setSpinner: (d: boolean) => void;
//   setMessage: (d: string) => void;
// };
// export default function FacebookLoginComponent({
//   setSpinner,
//   setMessage,
// }: socialProp) {
//   return (
//     <span>
//       <LoginSocialFacebook
//         appId="1325578461625194"
//         onReject={(error: any) => {
//           console.log(error);
//           setMessage("Facebook Auth Error Please try again ");
//         }}
//         onResolve={async (response: any) => {
//           console.log(response.data);
//           //before axios call
//           setSpinner(true);
//           const user = await loginWithFacebook(
//             response?.data?.accessToken || ""
//           );
//           setSpinner(false);
//           persistUser(user);
//           console.log(user);
//           axios.defaults.headers.common[
//             "Authorization"
//           ] = `Bearer ${user.token}`;

//           window.location.href = "/user-profile";
//         }}>
//         <button className="social-icon">
//           <i className="fab fa-facebook-f"></i>
//         </button>
//       </LoginSocialFacebook>
//     </span>
//   );
// }
