import { useState } from "react";
import { PostComponent } from "./Post"

let imageUrl = "https://imgs.search.brave.com/dw7vYRP_kzI5JUtslZA0a42utiIh6VORT1VD-AeJHZY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzIwLzY1LzM4/LzM2MF9GXzIyMDY1/MzgzNl90enZnbUlS/TUUwUGpnYzRkUHhv/MUU4enF2bGp6aHZH/Ui5qcGc"

function App() {

  let [posts, setPosts] = useState([
    // {
    //   logoUrl: imageUrl,
    //   name: "Karthik H",
    //   subtitle: "2300 followers",
    //   time: "12m",
    //   description: "created a TypeScript repository"
    // },
    // {
    //   logoUrl: imageUrl,
    //   name: "Malika",
    //   subtitle: "200 followers",
    //   time: "5h",
    //   description: "created a TypeScript repository"
    // }
  ])


  function addPost() {

    // using useState to update existing array of posts
    setPosts([...posts,
    {
      logoUrl: imageUrl,
      name: "Karthik H",
      subtitle: "2300 followers",
      time: "12m",
      description: "created a TypeScript repository"
    }

    ])
  }


  let postComponents = posts.map((post) => (
    <PostComponent
      logoUrl={post.logoUrl}
      name={post.name}
      subtitle={post.subtitle}
      time={post.time}
      description={post.description}
    />
  ));
  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <button onClick={addPost}>Add Post</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>

          {postComponents}

        </div>
      </div>
    </div>
  )
}

export default App
