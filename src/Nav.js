import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({search, setSearch}) => {
  return (
    <div>
        <form className="searchForm" onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="Search">Search Posts</label>
            <input 
                id="search"
                type="text"
                placeholder="Search Posts"
                value={search}
                onChange={(e)=>setSearch(e.target.value)} />
        </form>

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/newPost">NewPost</Link></li>
            <li><Link to="/postPage">PostPage</Link></li>
        </ul>
    </div>
  )
}

export default Nav