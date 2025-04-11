import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';
//1. 전체 상품페이지, 로그린, 상세상품페이지
//1-1 네비게이션바를 만든다
//2. 전체 상품페이지에서는 전체 상품을 볼수있다
//3. 로그인 버튼을 누르렴 로그린 페이지가 나온다
//4. 상품디테일을 눌렀으나, 로그린이 안되어 있으면 로그인 페이지가 먼저 나온다
//5. 로그아웃 버튼을 클릭하면 로그아웃이 된다
//6. 로그라웃이 돼면 상품 디테일 페이지를 볼수없다. 다시 로그인 페이지가 보인다
//7. 로그린을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다
function App() {
  const[authenticate,setAuthenticate]=useState(false);
  useEffect(()=>{
    console.log("aaaa"+authenticate);

  },[authenticate])
  return (
    
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
       
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;
