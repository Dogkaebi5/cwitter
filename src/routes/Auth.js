import { authService, firebaseInstance } from "../fbase";
import { useState } from "react";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (e) => {
    const {target: {name, value},} = e;
    if (name === "email") {setEmail(value);}
    else if (name === "password") {setPassword(value);}
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let data;
    try {
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(email, password);
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch(err){
      setError(err.message);
    }
  };

  const toggleAccount = () => {setNewAccount(!newAccount);}

  const onSocialClick = async (e) => {
    const {target:{name}} = e;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="email" type="text" placeholder="Email" required value={email} onChange={onChange}/>
        <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
        <input type="submit" value={newAccount? "Sign Up":"Log In" } />
        {error}
      </form>
      <span onClick={toggleAccount}>{newAccount ? "Login" : "Sign Up"}</span>
      <div>
        <button name="google" onClick={onSocialClick} >Google</button>
        <button name="github" onClick={onSocialClick} >Github</button>
      </div>
    </div>
  )
}

export default Auth;