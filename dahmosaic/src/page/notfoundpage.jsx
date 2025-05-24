import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
    <div className="flex flex-col h-screen text-center">
        <h1 className="text-xl font-bold">404</h1>
        <h2 className="text-6xl mt-8">Page Not Found</h2>
        <p className="text-xl mt-2">The page you are looking for does not exist.</p>
        <Link to="/" className="mt-5 font-bold text-blue-800 underline hover:text-red-800">
            Go to Home
        </Link>
    </div>
);

