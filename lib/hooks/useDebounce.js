import { useState, useEffect } from 'react';
const useDebounce = (value, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);
        // Cancel the timeout if value changes (also on delay change or unmount)
        return () => {
            clearTimeout(handler);
        };
    }, [JSON.stringify(value), delay]);
    return debouncedValue;
};
export { useDebounce };
