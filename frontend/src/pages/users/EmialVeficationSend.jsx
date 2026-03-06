import React from 'react'

function EmialVeficationSend() {
  return (
    <div class="min-h-[90vh] flex items-center justify-center bg-gray-100 p-4">
  <div class="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
    
    <div class="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-emerald-100 mb-6">
      <svg class="h-10 w-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </div>

    <h2 class="text-2xl font-bold text-gray-800 mb-2">Check your email</h2>
    <p class="text-gray-600 mb-6">
      We've sent a verification link to your inbox. Please click the link to confirm your account.
    </p>

    <div class="space-y-4">
      <button class="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition duration-200">
        Open Mail App
      </button>
      
   
    </div>

    <div class="mt-8 pt-6 border-t border-gray-100">
      <a href="/login" class="text-sm text-gray-400 hover:text-gray-600 flex items-center justify-center gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to login
      </a>
    </div>
  </div>
</div>
  )
}

export default EmialVeficationSend