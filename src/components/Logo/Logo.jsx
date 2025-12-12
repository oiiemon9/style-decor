import React from 'react';

import logo from '../../assets/StyleDecor.png';

const Logo = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="h-12 w-12">
          <img className="h-full w-full object-cover" src={logo} alt="" />
        </div>
        <div className="text-xl font-bold serif-font leading-4 relative">
          <div className="absolute h-[3px] w-7 bg-gradient-to-r from-purple-600 to-indigo-600 bottom-[6px] -left-[14px]"></div>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Style <br /> <span className="ms-2">Decor</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
