import { initializeApp, getApps, getApp, FirebaseApp  } from "firebase/app";
import React, { useState, useEffect, useContext, createContext, ReactNode } from "react";
// import "firebase/auth";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import {firebaseConfig} from "../../firebase.config";

let app: FirebaseApp;
getApps().length === 0 ? app = initializeApp(firebaseConfig) : app = getApp();

// const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const AuthContext = createContext<any>(null);

export function ProvideAuth({children} : {children: ReactNode | ReactNode[]}) {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(() => {
    let user: User | any = null;
    setLoading(true);

    if (typeof window !== "undefined") {
      if (localStorage.getItem("@BlogApp:user")) {
        user = JSON.parse(localStorage.getItem("@BlogApp:user")!);
      }
    }

    if (user) {
      setLoading(false);
      return user;
    }
  });

  const signin = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        if (typeof window !== "undefined") {
          const { uid, email } = res.user;
          localStorage.setItem("@BlogApp:user", JSON.stringify({ uid, email }));
        }

        setLoading(false);
        return res.user;
      })
      .catch((err) => {
        throw err.code;
      });
  };

  const signup = (email: string, password: string) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        if (typeof window !== "undefined") {
          localStorage.setItem("@BlogApp:user", JSON.stringify(res.user));
        }

        setLoading(false);
        return res.user;
      })
      .catch((err) => {
        throw err.code;
      });
  };

  const signout = () => {
    return auth.signOut().then(() => {
      setUser(null);
      if (typeof window !== "undefined") {
        localStorage.removeItem("@BlogApp:user");
      }
    });
  };

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsub();
  }, []);

  return {
    userId: user && user.uid,
    loading,
    signin,
    signup,
    signout
  };
}
