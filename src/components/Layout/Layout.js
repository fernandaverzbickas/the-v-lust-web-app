import React from 'react'

import Head from 'next/head'
import Navbar from '../Navbar/Navbar'
import favicon from '../../images/icon.png'

const Layout = (props) => (
    <div>
    <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <link rel="shortcut icon" type="image/x-icon" href={favicon} />
        <link href="https://fonts.googleapis.com/css?family=Lexend+Giga&display=swap" rel="stylesheet"></link>
        <title>V-LUST</title>
    </Head>
    <Navbar/>
    {props.children}
    </div>
)

export default Layout
