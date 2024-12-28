import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - S-Store`;
        } else {
            document.title = 'S-Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
