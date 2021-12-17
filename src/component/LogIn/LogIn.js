
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useState } from 'react';
import firebaseConfig from './FirebaseConfig';
firebase.initializeApp(firebaseConfig);


function Login() {
const [user, setUser] = useState({
  isLogIn: 'false',
  name:'',
  email:'',
  photo:'',
  error:'',
  success:''

})
console.log(user.name)
  const provider = new firebase.auth.GoogleAuthProvider();

  const handleSignIn = () => {
    firebase.auth().signInWithPopup(provider)
      .then(res => {
        console.log(res)
        const { email, name, picture } = res.additionalUserInfo.profile;
        const signedInUser={
          isLogIn:'true',
          name:name,
          email:email,
          photo:picture
        }
        setUser(signedInUser)

      })
      .catch(err => {
        console.log(err)

      })
  };


  const SignedOut=()=>{
    firebase.auth().signOut()
    .then(res=>{
      const signedOut={
        isLogIn:'false',
        name:'',
        email:'',
        password: '',
        photo: " "
      }
      setUser(signedOut)
    })
  }

  const handleChange=(event)=>{
    let isFieldValid = true;
    if(event.target.name === 'email'){
    isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);

    }
    if(event.target.name === 'password'){
      const passValid=event.target.value > 8;
      const ispassValid=/\d{1}/.test(event.target.value);
      isFieldValid= passValid && ispassValid;

    }
    if(isFieldValid){
      const newUserInfo ={...user};
      newUserInfo[event.target.name]=event.target.value;
    }

  }

  const formSubmit=(e)=>{
    console.log(e)
  document.getElementById("ok").reset()
    e.preventDefault();

  }

  return (
    <div className="App"  style={{width:'700px',height:'300px',backgroundColor:'gray',marginLeft:'300px',marginTop:'20px',marginBottom:'50px',borderRadius:'5px'}}>
      <h4>email:{user.email}</h4>
      <button type="btn" style={{backgroundColor:'goldenrod'}} onClick={handleSignIn}>Google SignIn</button>
      <button type="btn" style={{backgroundColor:'tomato'}} onClick={SignedOut}>signedOut</button>
      
      <form onSubmit={formSubmit} id="ok">
        <input type="text"  onChange={handleChange}  name="username" placeholder="UserName" style={{borderRadius:'5px'}} />
        <br/>
        <input type="email" onChange={handleChange}  name="email" placeholder="email" required style={{borderRadius:'5px'}} />
        <br/>
        <input type="password" onChange={handleChange}  name="password" placeholder="password" required style={{borderRadius:'5px'}}/>
        <br/>
        <input type="submit" value="submit" style={{ backgroundColor: 'tomato' }}></input>

      </form>
    </div>
  );
}

export default Login;