import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContecxt';

export default function App() {
  const {fetchBLogPost} = useContext(AppContext);
  useEffect(()=>{
    fetchBLogPost();
  },[])
  return (
    <div className='w-screen'>
    <Header/>
    <Blogs/>
    <Pagination/>
    </div>
  );
}
