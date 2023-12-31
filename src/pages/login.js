import { auth, db } from '@/db/firebase'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { doc, setDoc } from 'firebase/firestore';

const Login = () => {

  const router = useRouter()

  const handleLogin = async () => {
      const provider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        const { displayName, photoURL, uid } = result.user;
          
        console.log(result.user)
        // Store user's name and photo in Firestore
        await setDoc(doc(db, "admins", uid), {
          displayName, photoURL, uid
        })

        // router.push("/")

      } catch (error) {
        console.error('Error logging in:', error);
      }
    };

    // useEffect(() => {
    //   const unsubscribe = auth.onAuthStateChanged((user) => {
    //     if (user) {
    //       router.push("/");
    //     }
    //   });
  
    //   return () => unsubscribe();
    // }, []);
    
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
  <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
    <div className="flex flex-col overflow-y-auto md:flex-row">
      <div className="h-32 md:h-auto md:w-1/2">
        <img
          aria-hidden="true"
          className="object-cover w-full h-full dark:hidden"
          src="/login-office.jpeg"
          alt="Office"
        />
      </div>
      <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
        <div className="w-full">
          <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
            Login
          </h1>
          <label className="block text-sm">
            <span className="text-gray-700 dark:text-gray-400">Email</span>
            <input
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              placeholder="Jane Doe"
            />
          </label>
          <label className="block mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-400">Password</span>
            <input
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              placeholder="***************"
              type="password"
            />
          </label>
         
          <a
            className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
            href="#"
          >
            Log in
          </a>
          <hr className="my-8" />
          <button onClick={handleLogin} className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5  text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
            <Image src={`/google.png`} alt='' height={19} width={19} className='mr-1'/>
            Google
          </button>
          <button className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium leading-5  text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
            <svg
              className="w-4 h-4 mr-2"
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
            </svg>
            Twitter
          </button>
          <p className="mt-4">
            <a
              className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
              href="#"
            >
              Forgot your password?
            </a>
          </p>
          <p className="mt-1">
            <a
              className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
              href="#"
            >
              Create account
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Login