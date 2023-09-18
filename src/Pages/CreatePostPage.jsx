import { useEffect, useRef, useContext, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../Firebase/firebase-config";
import Context from "../Store/Context";
import { imgDB } from "../Firebase/firebase-config";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const CreatePostPage = () => {
  const { isLogged } = useContext(Context);
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const postContentRef = useRef(null);

  const [imgUrl, setImgUrl] = useState("");

  const imageUploadHandler = async (e) => {
    const imgs = ref(imgDB, `imgs/${v4()}`);
    await uploadBytes(imgs, e.target.files[0]).then((data) => {
      getDownloadURL(data.ref).then((val) => {
        setImgUrl(val);
      });
    });
  };

  const postCollectionRef = collection(db, "posts");
  const createPostHandler = async (e) => {
    e.preventDefault();
    const postInfo = {
      title: titleRef.current.value,
      category: categoryRef.current.value,
      postContent: postContentRef.current.value,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      image: imgUrl,
      date: new Date(),
    };
    await addDoc(postCollectionRef, postInfo);
    titleRef.current.value = "";
    categoryRef.current.value = "";
    postContentRef.current.value = "";

    navigate("/");
  };

  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <section className="flex justify-center items-center mt-8">
        <div className="bg-secondary rounded-3xl w-[50rem]">
          <h1 className="text-center text-2xl font-bold my-4">Create Post</h1>
          <form onSubmit={createPostHandler}>
            <div className="input-div">
              <label className="input-label" htmlFor="title">
                Title
              </label>
              <input
                ref={titleRef}
                className="input"
                type="text "
                id="title"
                name="title"
              />
            </div>
            <div className="input-div">
              <label className="input-label" htmlFor="Category">
                Category
              </label>
              <input
                className="input"
                ref={categoryRef}
                type="text "
                id="Category"
                name="Category"
              />
            </div>
            <div className="input-div">
              <label className="input-label" htmlFor="content">
                Post Content
              </label>
              <textarea
                ref={postContentRef}
                type="text"
                className="input"
                id="content"
                name="content"
                cols="20"
                rows="8"
              />
            </div>
            <div className="input-div">
              <label className="input-label" htmlFor="content">
                Upload Image
              </label>
              <input
                onChange={imageUploadHandler}
                type="file"
                className="input"
                id="file"
                name="file"
              />
            </div>
            <button
              disabled={!imgUrl}
              className=" disabled:opacity-50 w-[20rem] mx-[30%] p-1 rounded-2xl my-5 bg-tertiary"
            >
              Post
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default CreatePostPage;
