import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const PrivateRouter = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            
        </div>
    );
};

export default PrivateRouter;