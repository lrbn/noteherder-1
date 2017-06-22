import React from 'react'

import './SignIn.css'
import { auth, githubProvider, googleProvider } from './base'

const SignIn = () => {
  const authenticate = (provider) => {
    auth.signInWithPopup(provider)
  }

  return (
    <div>
      <h2>Welcome to Noteherder</h2>
      <h3>Please sign in with the following options:</h3>
      <button
        className="SignIn"
        onClick={() => authenticate(githubProvider)}
      >
        Sign In With GitHub
      </button>
      <button
        className="SignIn"
        onClick={() => authenticate(googleProvider)}
      >
        Sign In With Google
      </button>
    </div>
  )
}

export default SignIn
