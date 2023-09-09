
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/Components/Header";
import { auth } from "@/db/firebase";
import Login from "./login";

export default function App({ Component, pageProps }) {
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Listen for route changes and update isNavHidden accordingly
    if (router.pathname === "/create-ctgs") {
      setIsNavHidden(true);
    } else {
      setIsNavHidden(false);
    }
  }, [router.pathname]);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (!user) {
  //   return ;
  // }

  return (
    <>
      {user ? (
        <>
          {!isNavHidden && <Header photoUrl={user.photoURL} />}
          <Component {...pageProps} />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}
