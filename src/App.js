import './App.css';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import Missing from './Missing';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Footer from './Footer';
import Post from './Post';
import PostLayout from './PostLayout';
import { Routes , Route } from 'react-router-dom';
import { useState } from 'react';



function App() {

  const [posts,setPosts]=useState(
    [{
      id:1,
      title:"My",
      datetime:"July 1,20 11.13am",
      body:"Blaaahhhhhhhhhhhhh"
    },
    {
      id:2,
      title:"Love",
      datetime:"July 1,20 11.13am",
      body:"Blaaahhhhhhhhhhhhh"
    },
    {
      id:3,
      title:"Stupid",
      datetime:"July 1,20 11.13am",
      body:"Blaaahhhhhhhhhhhhh"

    }
  ]
  );
  const [search,setSearch]=useState('');
 // const [searchResult,setsearchResult]=useState([]);


  return (
    <div className="App">
      <Header  title=" My Social Media"
      />
       <Nav  search={search} setSearch={setSearch} />
       {/* <Home posts={posts} /> */}
        {/* 
        <Nav />
        <Home />
        <About />
        <Missing />
        <Footer /> */}


      <Routes>
          <Route path="/" element={<Home posts={posts} />}  />
          <Route path="/about" element={<About />}  />
          <Route path="/NewPost" element={<NewPost />}  />

          {/*<Route path="/postpage" element={<PostPage />}  />
          <Route path="/postpage/:id" element={<Post />}  /> */}
        <Route path="/postpage"  element={<PostLayout />}>
          <Route index element={<PostPage />}  />
          <Route path=":id" element={<Post />}  />
        </Route>

          <Route path="*" element={<Missing />} />

      </Routes>
       


    </div>
  );
}

export default App;
