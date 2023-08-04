'use client'
import React, { useState, useEffect } from 'react';
import TitlePage from './TitlePage';
import Content  from './Content';
import Banner from './Banner';


function Main() {
 return (
    <main>
        <TitlePage />
        <Content />
    </main>
    ) 
}

export default Main;