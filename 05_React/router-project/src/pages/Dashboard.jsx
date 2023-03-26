function Dashboard() {
  return (
    <div className="flex flex-row justify-center items-center text-white text-3xl">
     
     <div className="text-center bg-slate-400 h-auto ">
     Welcome to Studynotion!
     </div>
    
      <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">Dashboard</h1>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none">Create New</button>
        </div>
      </header>
      <main className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Total Users</h2>
            <div className="flex items-center">
              <span className="text-5xl font-bold text-indigo-600 mr-2">158</span>
              <span className="text-sm font-medium text-gray-500">+15 since last month</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Total Sales</h2>
            <div className="flex items-center">
              <span className="text-5xl font-bold text-indigo-600 mr-2">$12,345</span>
              <span className="text-sm font-medium text-gray-500">+5% since last month</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Total Orders</h2>
            <div className="flex items-center">
              <span className="text-5xl font-bold text-indigo-600 mr-2">76</span>
              <span className="text-sm font-medium text-gray-500">+10 since last month</span>
            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
}

export default Dashboard;
