import React from 'react';
import './App.css';
import { HomePage } from "./pages/HomePage/Home.Page";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CreateEditPostPage from './pages/CreateEditPostPage/CreateEditPost.Page';
import PostPage from './pages/PostPage/Post.Page';
import { RecoilRoot } from 'recoil';
import LoginPage from './pages/LoginPage/Login.Page';

function App() {
    return (
        <RecoilRoot>
            <Router>
                <div className="App">
                    <AppHeader />
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/post/:id' element={<PostPage />} />
                        <Route path='/edit' element={<CreateEditPostPage />} />
                        <Route path='/edit/:id' element={<CreateEditPostPage postId={0} />} />
                    </Routes>
                </div>
            </Router>
        </RecoilRoot>
    );
}

export default App;
