import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Signup.css';

export default function Signup() {
  const history=useHistory()
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [phone,setPhone]=useState('')
  const {firebase}=useContext(FirebaseContext)

  const handlesubmit=(e)=>{
    e.preventDefault()
    
      firebase.auth().createUserWithEmailAndPassword(email,password).then((result) => {
        console.log(result)
        result.user.updateProfile({ displayName:username })
        .then(()=>{
          console.log('1');
          firebase.firestore().collection('users').add({
            id:result.user.uid,
             username:username,
              phone:phone
          }).then(()=>{
            console.log('2');
            history.push('/login')
          })
        })
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img alt="" width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handlesubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            onChange={(event)=>{
              setUsername(event.target.value)}
            }
            value={username}
            id="fname"
            name="name"
           
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            onChange={(event)=>setEmail(event.target.value)}
            value={email}
            id="email"
            name="email"
            
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
           className="input"
           type="number"
           value={phone}
           onChange={(e) => { setPhone(e.target.value) }}
           id="phone"
           name="phone"
           
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          
       
          <input
           

            className="input"
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            id="password"
            name="password"
          />
          <br />
          <br />
          <button >Signup</button>
        </form>
        <a href='/login'>Login</a>
      </div>
    </div>
  );
}
