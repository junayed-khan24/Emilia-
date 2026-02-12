import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <h2 className="text-3xl font-normal text-center py-16">Portfolio</h2>
            <p className="text-center font-normal font-regular mb-8">A showcase of my recent photography work.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
                {/* Portfolio items would go here */}
            </div>      
        </div>
    );
};

export default Portfolio;