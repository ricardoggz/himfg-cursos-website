import { useEffect } from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  useEffect(()=>{
    if(window.dataLayer){
      window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-1YHJW3W0J0');
    }
  }, [])
  return (
    <Html lang="en">
      <Head>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=G-1YHJW3W0J0`}></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
