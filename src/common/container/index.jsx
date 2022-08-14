import React from 'react';

const Container = ({children, className}) => {
    return (
        <div className={`max-w-[1440px] w-full mx-auto px-4   ${className} `}>
            {children}
        </div>
    );
};

export default Container;
