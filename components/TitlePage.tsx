import { metadata } from '@/app/layout';
import React, { useEffect, useState } from 'react';

function TitlePage(){
    const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const getLastSegmentFromUrl = (url: string) => {
    const diviser = url.split('/');
    return diviser[diviser.length - 1];
  };
  let lastSegment = getLastSegmentFromUrl(currentUrl);
  if (lastSegment == "") {
    lastSegment = 'Pagina inicial';
  }

    return (
        <h1 className='text-center font-bold mt-5'>{lastSegment}</h1>
    )
}

export default TitlePage;