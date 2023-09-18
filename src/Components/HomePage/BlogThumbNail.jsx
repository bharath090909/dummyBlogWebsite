import { useContext } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";
import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../Firebase/firebase-config";
import Context from "../../Store/Context";

const Blog = (props) => {
  const { id, image, title, postContent, author, category } = props.blog;
  const { isLogged } = useContext(Context);
  const lessContent = postContent.substring(0, 110);

  const deletePost = async () => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    // window.location.reload();
  };
  return (
    <>
      <div className="flex flex-col relative">
        {isLogged && author.id === auth.currentUser.uid && (
          <IoMdCloseCircle
            size="40px"
            onClick={deletePost}
            className="absolute text-red-500 -right-[1rem] -top-3"
          />
        )}
        <img className="w-[30rem] h-[15rem] rounded-2xl" src={image} />
        <div className="w-full">
          <p className="bg-tertiary inline-block my-2 px-2 rounded-xl ">
            {category}
          </p>
          <h1 className="text-2xl font-bold ">{title}</h1>
          <p className="text-justify opacity-60 my-3 ">{lessContent}...</p>
          <div className="flex justify-between">
            <p>@{author.name}</p>
            <Link to={`/blog/${id}`}>
              <BsArrowRightShort className="cursor-pointer" size="30px" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
