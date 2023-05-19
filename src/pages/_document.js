import { useEffect } from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  useEffect(()=>{
    if(window.dataLayer){
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', process.env.ID_ANALYTICS);
    }
  }, [])
  return (
    <Html lang="en">
      <Head>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.ID_ANALYTICS}`}></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
