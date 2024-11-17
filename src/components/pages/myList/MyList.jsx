import React from 'react';
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const MyList = () => {
    const userInfo = useLoaderData()
    console.log(userInfo);
    // const {email} = userInfo
    

    return (
        <div>
            <h1>User List:{userInfo.length} </h1>
           <div>
                {
                    userInfo.map(user => {
                        const {email, displayName} = user
                        return(
                            <div>
                                <h1>{email}</h1>
                                <h1>{displayName}</h1>
                            </div>
                        )
                    })
                }
           </div>
        </div>
    );
};

export default MyList;
