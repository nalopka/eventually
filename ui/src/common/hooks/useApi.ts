import { useState } from 'react';

const useApi = (request: any) => {
    const [ loading, setLoading ] = useState(false);
    const [ data, setData ] = useState<any>(undefined);

    const execute = async () => {
        setLoading(true);
        const response = await request();
        setData(response);
        setLoading(false);
    };

    return [
        data,
        loading,
        execute,
    ];
};

export default useApi;
