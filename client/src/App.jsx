import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Category from "./pages/Category";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Update from "./pages/Update";

import { useContext } from "react";
import Create from "./pages/Create";
import { AuthContext, AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:slug" element={<Post />} />
          <Route path="/posts/categories/:category" element={<Category />} />
          <Route path="/api/users/register" element={<Register />} />
          <Route path="/api/users/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute component={Dashboard} />}
          />
          <Route
            path="/api/posts"
            element={<ProtectedRoute component={Create} />}
          />
          <Route
            path="/api/posts/:slug"
            element={<ProtectedRoute component={Update} />}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

const ProtectedRoute = ({ component: Component }) => {
  const { user } = useContext(AuthContext);

  return user ? <Component /> : <Navigate to={"/"} />;
};

export default App;
