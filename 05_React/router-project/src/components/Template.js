import React from 'react'
import frame from "../assets/frame.png";
import { useNavigate } from 'react-router-dom';

function Template({ title, description1, description2, image, formType, setIsLoggedIn }) {
    const navigation = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoggedIn(true); 
        navigation("/dashboard")
    }

  return (
  <>
   <div className="bg-gray-100 min-h-screen flex flex-row justify-center py-12 sm:px-6 lg:px-8">
    
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative ">
        <img className="mx-auto max-h-96 w-auto absolute top-5 left-10 rounded-lg hover:scale-110 duration-200"  src={image} alt="Login" />
        <img className="mx-auto max-h-96 w-auto rounded-lg" src={frame} alt="Login" />
      </div>

      <div className=" sm:mx-auto sm:w-full sm:max-w-md">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{title}</h2>
        <p className="mt-2 text-center text-sm text-gray-600">{description1}</p>
        <p className="mt-2 text-center text-sm text-gray-600">{description2}</p>
        <div className="bg-white mt-10 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="mt-1">
                <input id="username" name="username" type="text" autoComplete="username" required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input id="password" name="password" type="password" autoComplete="current-password" required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
           
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {formType}
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div></>
  )
}

export default Template;
