'use client';
import React, { useState } from "react";

export default function NavBar() {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const closeSearch = () => {
    setSearchOpen(false);
  };

  return (
    <>
    
    <h2 className="items-center flex p-1 text-white-200 justify-center">Proudly developed by Ram And Dipesh with Love In Bharat</h2>
    <nav className="bg-white border-gray-200 dark:bg-gray-500 mt-2"><div className="flex justify-between ml-4 p-2 mt-1">
        
        <h2 className="font-bold text-4xl bg-red-600 text-yellow-400">MyBlogger</h2>

{/* Your navigation links */}
<div className="flex justify-evenly items-center p-2 m-2">
<ul className="flex gap-8">
  <li>
    <h3 >Tech</h3>   </li>
  <li>
    <h3 >How to</h3>   </li>
  <li>
    <h3 >What</h3>   </li>
  <li>
    <h3 >Posts</h3>   </li>
</ul>

</div>

        </div>    </nav>

    </>  );
}
