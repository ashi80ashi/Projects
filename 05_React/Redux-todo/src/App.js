import TodoList from './components/TodoList'
function App() {
  return (
  <div className='h-screen w-screen flex flex-col items-center justify-center gap-4 bg-slate-900'>
    <h1 className='text-3xl text-white font-bold '>Make Note With Redux</h1>
    <TodoList/>
  </div>
  );
}

export default App;
