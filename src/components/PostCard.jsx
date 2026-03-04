import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'


function PostCard( $id, title, content, featuredImage) {
  return (
    <div>
      <link to={`/post/${$id}`}>
        <div className='w-full h-64 bg-gray-300 rounded-lg overflow-hidden p-4'>
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='w-full h-full object-cover' />
        </div>
        <h2 className='text-xl font-bold mt-4'>{title}</h2>
        <p className='text-gray-600 mt-2'>{content}</p>
      </link>
    </div>
  )
}

export default PostCard
