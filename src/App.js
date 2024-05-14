import "./App.css";
import Header from "./Header";
import Nav from "./Component/Nav";
import Home from "./Home";
import Missing from "./Missing";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Post from "./Component/Post";
import PostLayout from "./PostLayout";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Notification from "./Notification";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "The Shawshank Redemption",
      datetime: "July 1, 1994",
      body: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      rating:"5",
      imageSrc: "https://th.bing.com/th/id/OIP.7RPKrQ3r5qU8B2YiAWxiVAHaK-?rs=1&pid=ImgDetMain"
    },
    {
      id: 2,
      title: "The Godfather",
      datetime: "March 24, 1972",
      rating:"3",
      body: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      imageSrc: "https://th.bing.com/th/id/OIP.bc6LFsSyD8iNMydB7FVr9AHaKg?rs=1&pid=ImgDetMain"
    },
    {
      id: 3,
      title: "The Dark Knight",
      datetime: "July 18, 2008",
      rating:"4",
      body: "When the menace known as The Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      imageSrc: "https://th.bing.com/th/id/R.34df6b287faf65b160b47e05ba85bb3b?rik=o5LsP1up4eGlXA&pid=ImgRaw&r=0"
    },
    {
      id: 4,
      title: "The Dark Knight",
      datetime: "July 18, 2008",
      rating:"4",
      body: "When the menace known as The Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      imageSrc: "https://th.bing.com/th/id/R.34df6b287faf65b160b47e05ba85bb3b?rik=o5LsP1up4eGlXA&pid=ImgRaw&r=0"
    },
    {
      id: 5,
      title: "The Dark Knight",
      datetime: "July 18, 2008",
      rating:"4",
      body: "When the menace known as The Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      imageSrc: "https://th.bing.com/th/id/R.34df6b287faf65b160b47e05ba85bb3b?rik=o5LsP1up4eGlXA&pid=ImgRaw&r=0"
    },
    {
      id: 6,
      title: "The Dark Knight",
      datetime: "July 18, 2008",
      rating:"4",
      body: "When the menace known as The Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      imageSrc: "https://th.bing.com/th/id/R.34df6b287faf65b160b47e05ba85bb3b?rik=o5LsP1up4eGlXA&pid=ImgRaw&r=0"
    },
    
  ]);

  const [search, setSearch] = useState("");

  // Function to update post data
  const updatePostData = (postId, updatedData) => {
    setPosts(posts.map(post => post.id === postId ? { ...post, ...updatedData } : post));
  };

  return (
    <div className="App">
      <Header title=" Movie Review App" />
      <Nav search={search} setSearch={setSearch} />

      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/NewPost" element={<NewPost />} />
        <Route path="/postpage" element={<PostLayout />}>
          <Route index element={<PostPage />} />
          <Route path=":id" element={<Post />} />
        </Route>
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
