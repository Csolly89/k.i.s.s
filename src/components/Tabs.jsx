import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-text border-b border-green-500' : 'text-secondary ' 
    return ( 
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-primary hover:border-b hover:border-primary ${buttonClasses} `}> 
            {children}
            </p>
        </button>
    );
}

export default TabButton;