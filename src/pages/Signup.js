// import Template from "../components/Auth/Template";
import signupImg from "../assets/signup.png";
import Template from "../component/Template";
// import signupImg from '../assets/signup.png';

function Signup({ setIsLoggedIn}) {
  return (
   <div className="h-full w-full overflow-auto bg-richblack-900">
    <Template 
    title="Join the millions learning to code with StudyNotion for free"
    desc1="Build skills for today, tomorrow, and beyond."
    desc2="Education to future-proof your career."
     image={signupImg}
     formtype="signup"
     setIsLoggedIn={setIsLoggedIn}/>
   </div>
  );
}

export default Signup;
