import { Loader } from 'lucide-react';
import React from 'react'

export const LargeLoading=()=> {
  return (
    <div className='flex justify-center items-center h-screen '><Loader size={45} className='animate-spin'/></div>
  )
}

