import React, { useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert("An error has occured. Please check the console.");
        console.log(error);
      });
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-sky-500 rounded-xl p-8 mx-auto'>
        <h3 className='text-2xl'>Are you Sure you want to delete this book?</h3>
        <button className='p-4 bg-red-700 text-white m=8 w-full' onClick={handleDeleteBook}>
          Yes,Delete IT
        </button>
      </div>
    </div>
  )
}

export default DeleteBook