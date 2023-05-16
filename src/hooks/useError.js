import React, { useCallback, useContext, useState } from 'react';

const ErrorContext = React.createContext({});

export const ErrorProvider = ({ children }) => {
    const [error, setError] = useState(null);

    const dispatchError = useCallback((message) => {
        setError(message);
    }, []);

    return <ErrorContext.Provider value={{ error, dispatchError }}>{children}</ErrorContext.Provider>
};

export const useError = () => {
    const errorContext = useContext(ErrorContext);

    if(!errorContext) {
        throw Error('useError needs to be used inside ErrorContext');
    }

    return errorContext;
};