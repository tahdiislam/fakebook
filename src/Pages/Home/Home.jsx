import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/AuthProvider";
import SinglePost from "./SinglePost";

const Home = () => {
  const [posts, setPosts] = useState([])
  const { user, logOutUser } = useContext(UserContext)

  // load all post
  useEffect(() => {
    fetch(`http://localhost:5000/posts?email=${user?.email}`, {
      headers: {
        authorization: `Emon ${localStorage.getItem("fake-token")} `
      }
    })
      .then(res =>{
        if(res.status === 401 || res.status === 403){
          return logOutUser()
        }
        return res.json()
        })
      .then(data => setPosts(data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
      {
        posts.map(post => <SinglePost key={post._id} post={post}/>)
      }
      </div>
    </div>
  );
};

export default Home;