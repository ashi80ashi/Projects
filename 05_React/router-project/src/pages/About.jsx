import React from 'react'

function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
    <header className="bg-white shadow">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">About Us</h1>
      </div>
    </header>
    <main className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <p className="text-lg text-gray-700">We are a team of passionate learners who love to study and learn new things.</p>
      <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <ul className="list-disc list-inside mt-4 text-gray-700">
        <li>Our mission is to provide high-quality educational resources to everyone.</li>
        <li>We believe that education should be accessible to all.</li>
        <li>We are dedicated to creating a community of learners who support each other.</li>
      </ul>
    </main>
  </div>
  )
}

export default About
