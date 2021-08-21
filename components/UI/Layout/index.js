import React from 'react'
import Header from '../Header'
import Head from 'next/head'

function index(props) {
    return (
        <div>
            <Head>
            <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
            </Head>
            <Header />
            {props.children}
        </div>
    )
}

export default index
