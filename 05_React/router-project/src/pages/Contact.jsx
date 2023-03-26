import React from 'react'

function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen">
    <header className="bg-white shadow">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">Get in Touch</h1>
      </div>
    </header>
    <main className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <div className="mb-4 md:mb-0">
          <p className="text-lg text-gray-700">Have a question or comment?</p>
          <p className="mt-2 text-gray-600">Feel free to contact us using the form below or by emailing us at <a href="mailto:contact@example.com" className="text-indigo-600 hover:text-indigo-800">contact@example.com</a>.</p>
        </div>
        <form className="flex flex-col md:flex-row items-center">
          <input type="text" placeholder="Your name" className="px-4 py-2 mb-4 md:mb-0 w-full md:w-1/3 bg-gray-200 border border-gray-400 rounded-md focus:bg-white focus:border-indigo-600 focus:outline-none" />
          <input type="email" placeholder="Your email" className="px-4 py-2 mb-4 md:mb-0 mx-0 md:mx-4 w-full md:w-1/3 bg-gray-200 border border-gray-400 rounded-md focus:bg-white focus:border-indigo-600 focus:outline-none" />
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none">Send</button>
        </form>
      </div>
    </main>
  </div>
  )
}

export default Contact
