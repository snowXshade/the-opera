import React from 'react'
import posts from '../data/blogs'
import Card from './cards';

const RecentPost = () => {

  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0,2);

  return (
   <div className='relative' id='posts'>
     <div className='Recentmain'>
   
      <div className="recentheader">
        <p>Recent Posts</p>
        <a href="/blog">
          View All
        </a>
      </div>

   
      <div className="recentposts">
         <div className='cards'>
          {sortedPosts.map((post) => (
          <Card
            key={post.id}
            heading={post.title}
            date={post.date}
            tags={post.tags}
            description={post.summary}
          />
        ))}
         </div>
      </div>
    
    </div>
   </div>
  )
}

export default RecentPost
