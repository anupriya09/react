import React, {useState, useEffect} from 'react'
import axios from 'axios'

interface Post{
    id: string,
    title: string,
    body: string
}

interface PostsArray extends Array<Post>{}

function PostsWithAxios() {
  const [posts, setPosts] = useState<PostsArray>( [] );
 
  useEffect(() => {
    const axiosPosts = async () => {
      const response = await axios('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    };
    axiosPosts();
  }, []);

const useaxiosPosts = posts.map((post)=>{
  return <div>
              <h3>{post.id}</h3>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div> 
  })

  return (
    <>
      <h1>Axios With UseState and UseEffect</h1>
      <h2>Dummy API - https://jsonplaceholder.typicode.com/posts</h2>
      <div className="axioscontainer">
          {posts && useaxiosPosts}
      </div>
    </>
  );
}

export default PostsWithAxios;