import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-text border-b border-green-500' : 'text-secondary ' 
    return ( 
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-accent hover:border-b hover:border-accent ${buttonClasses} `}> 
            {children}
            </p>
        </button>
    );
}

export default TabButton;