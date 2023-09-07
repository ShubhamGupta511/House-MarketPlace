import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import googleIcon from "../assets/svg/googleIcon.svg";

function OAuth() {
  const location = useLocation();
  const navigate = useNavigate();

  const onGoogleClick =async () => {

    try {
        const auth=getAuth();
        const provider=new GoogleAuthProvider();
        const result= await signInWithPopup(auth,provider);
        const user=result.user
        // Getting the User From the Google Sign In
        // and then we are passing that userid in here
        // to see if we have a reference to that document
        // so then we get the snapshot of the document
        // So we call the docSnap and we want to await 
        // getDoc and getDoc is going to take the reference


        // Check for user
        const docRef=doc(db,'users',user.uid);
        const docSnap=await getDoc(docRef);

        // If user Does n't exist, create user
        if(!docSnap.exists()){
           await setDoc(doc(db,'users',user.uid),{
                name:user.displayName,
                email:user.email,
                timestamp:serverTimestamp()
           })
        }
        navigate('/')
    } catch (error) {
        toast.error('Could not authorize with Google')
    }

  };
  return (
    <div className="socialLogin">
      <p>Sign {location.pathname === "/signup" ? "up" : "in"} with</p>
      <button className="socialIconDiv" onClick={onGoogleClick}>
        <img src={googleIcon} className="socialIconImg" alt="google" />
      </button>
    </div>
  );
}

export default OAuth;
