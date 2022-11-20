import React, {useState, useEffect} from 'react';

export default function usePromise(promiseCreateor, deps){
    const [loading, setLoading] = useState(false);
    const [resolved, setResolved] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const process = async () => {
            setLoading(true);

            try {
                const resolved = await promiseCreateor();
                setResolved(resolved);
            } catch(e) {
                setError(e);
            }

            setLoading(false);
        }

        process();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    return [loading, resolved, error];
}