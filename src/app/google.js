import Script from 'next/script'

function Gtag() {
    return (
        <div className="container">
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-5XQQLB2M6F"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5XQQLB2M6F');
        `}
            </Script>
        </div>
    )
}

export default Gtag
