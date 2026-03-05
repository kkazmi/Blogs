import React, {useState, useEffect} from 'react'
import { Container, Postfrom } from '../components'
import appwriteService from "../appwrite/config";
import { useParams, useNavigate } from 'react-router-dom';
import { set } from 'react-hook-form';

function EditPost() {
    const [post, setPost] = useState({})
    const slug = useParams().slug
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPostById(slug).then((post) => {
                if (post) {
                    setPost(post) 
                } else {
                    navigate("/add-post")
                }   }
            , [slug, navigate]));
 
  return (
    <div>
      
    </div>
  )
}

export default EditPost
