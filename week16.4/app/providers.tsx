'use client';
import React from "react";
import {SessionProvider} from "next-auth/react"

export const Providers = ({childern} : {
    childern : React.ReactNode
}) => {
    return(
        <SessionProvider> 
            {childern}
        </SessionProvider>
    )
}