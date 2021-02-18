import React, {useState, useEffect} from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res =>{
      const responsePosts = res.data;
      setPosts(responsePosts);
    }));
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      {posts && posts.map((posts => {
        const {id, title} = posts;
        return(
          <div key={id}>
            <h5>{title}</h5>
            <h6>Assigned to user: {id}</h6>
          </div>
        )
      }))}
    </div>
  );
};

export default Posts;