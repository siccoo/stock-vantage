import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0 text-white">
            <span className="font-semibold text-xl">Stock App</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;