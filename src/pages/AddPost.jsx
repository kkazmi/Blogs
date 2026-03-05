import React from 'react'
import {Postfrom, Container} from '../components'


function AddPost() {
  return (
    <div className='w-full h-screen flex items-center justify-center py-8'>
        <Container>
      <Postfrom />
        </Container>    
    </div>
  )
}

export default AddPost
