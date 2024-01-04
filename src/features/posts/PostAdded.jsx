import React, { useState } from 'react'
import { postAdded } from './postSlice'
import { useDispatch,useSelector } from 'react-redux'
import { selectAllUsers } from '../users/userSlice';

const PostAdded = () => {
    const[title,setTitle]=useState('')
    const[content,setContent]=useState('')
    const[userId,setUserId]=useState('')

    const dispatch=useDispatch()
    const users=useSelector(selectAllUsers)

    const titleValue=(e)=>setTitle(e.target.value)
    const contentValue=(e)=>setContent(e.target.value)
    const AuthorValue=e=>setUserId(e.target.value)

    const userOptions=users.map(user=>(
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    ))
    const savePost=()=>{
        if(title && content){
            dispatch(postAdded(title,content,userId))

            setContent('');
            setTitle('');
        }
    }

    const saveIt=Boolean(title)&&Boolean(content)&&Boolean(userId);

  return (
    <section>
        <h2>Add Post</h2>
        <form action="">
            <label htmlFor="postTitle">Post Title</label>
            <input type="text" 
            id='postTitle'
            name='postTitle'
            value={title} 
            onChange={titleValue}/>

          <label htmlFor="postAuthor">Author:</label>
          <select name="postAuthor" id="postAuthor" value={userId} onChange={AuthorValue}>
            <option value="">none</option>
            {userOptions}
          </select>

            <label htmlFor="postContent">Content:</label>
           <textarea name="postContent" id="postContent"
           value={content}
           onChange={contentValue} />

           <button type='button'onClick={savePost} disabled={!saveIt}> Save Post</button>
        </form>
    </section>
  )
}

export default PostAdded