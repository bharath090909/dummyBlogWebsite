import React, { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase-config";
import { collection } from "firebase/firestore";
import Context from "./Context";

const ContextProvider = (props) => {
  const [isLogged, setIsLogged] = useState(localStorage.getItem("isLogged"));
  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, "posts");
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  });
  return (
    <Context.Provider value={{ isLogged, setIsLogged, postList }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
