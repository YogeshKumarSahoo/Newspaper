import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Post } from './pages/Post'
import { Posts } from './pages/Posts'
import { Publish } from './pages/Publish'
import ProtectedRoute from './utils/protected'
import { Dashboard } from './pages/Dashboard'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/post/:id" element={<ProtectedRoute><Post /></ProtectedRoute>} />
          <Route path="/posts" element={<ProtectedRoute><Posts /></ProtectedRoute>} />
          <Route path="/publish" element={<ProtectedRoute><Publish type='new' /></ProtectedRoute>} />
          <Route path="/publish/:id" element={<ProtectedRoute><Publish type='update' /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/*" element={<Navigate to="/signin" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App