import React from 'react';

export default function Footer(){
    return (
      <div>
        
        <h1 className='p-2 mx-2 mt-2 '>Footer</h1>
        <li className='flex flex-cols-3'>
          <ul className='Flex '>
            <li> Tech Blogs</li>
            <li>Latest</li>
            <li>Community Posts</li>
          </ul>
          <ul>
            <li>Personal Blogs</li>
            <li>Latest</li>
            <li>Community Posts</li>
          </ul>
          <ul>
            <li>How To's Blog</li>
            <li>Latest</li>
            <li>Community Posts</li>
          </ul>
        </li>
      </div>
    );
  }

