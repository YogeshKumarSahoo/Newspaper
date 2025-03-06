import  { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: ReactNode; 
}
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const navigate = useNavigate();

    useEffect(() => {
        // Check for access token in localStorage
        const token = localStorage.getItem('jwt');

        if (!token) {
            // If token is not found, redirect to login page
            navigate('/signin');
        }
    }, [history]);

    return children;
};

export default ProtectedRoute;
