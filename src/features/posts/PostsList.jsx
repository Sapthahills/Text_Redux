import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPost } from './postSlice'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'

const PostsList = () => {
    const Allpost=useSelector(selectAllPost)
    const orderWise=Allpost.slice().sort((a,b)=>b.date.localeCompare(a.date))
    
    const renderPost=orderWise.map(post=>(
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,50)}</p>
            <p className="postCtedit">
                <PostAuthor userId={post.userId}/>
                <TimeAgo timestamp={post.date}/>
                <ReactionButtons post={post}/>
            </p>
        </article>
    ))
  return (
    <section className='postList'>
        <h2>Posts</h2>
        {renderPost}
    </section>
  )
}

export default PostsList