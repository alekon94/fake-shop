import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/index';

const Cart = React.lazy(() => import('./Pages/cart'));
const Products = React.lazy(() => import('./Pages/products'));
const Registration = React.lazy(() => import('./Pages/registration'));
const Login = React.lazy(() => import('./Pages/login'));
const Users = React.lazy(() => import('./Pages/users'));
const Main = React.lazy(() => import('./Pages/main'));
function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <React.Suspense>
                    <Routes>
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<Main />} />
                        <Route path="/products/*" element={<Products />} />

                        <Route
                            path="/registration"
                            element={<Registration />}
                        />
                        <Route path="/login" element={<Login />} />
                        <Route path="/users" element={<Users />} />

                        <Route render={() => <h1>404</h1>} />
                    </Routes>
                </React.Suspense>
            </div>
        </Router>
    );
}

export default App;
