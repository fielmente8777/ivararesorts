  import type { Metadata } from "next";
  import { Cormorant_Garamond, Fraunces, Manrope } from "next/font/google";
  import "./globals.css";
  import "./style.scss";
  import Script from "next/script";
  import Whatsapp from "@/components/ContactButton/WhatsApp";
  import { contact } from "@/utils/constent";
  import Call from "@/components/ContactButton/Call";

  const cormorant = Cormorant_Garamond({
    variable: "--font-cormorant-garamond",
    subsets: ["latin"],
  });

  const fraunces = Fraunces({
    variable: "--font-fraunces",
    subsets: ["latin"],
    style: ["normal", "italic"],
  });

  const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
  });

  export const metadata: Metadata = {
    title: "Ivara | Luxury Resort in Khajuraho, Madhya Pradesh",
    description: "",
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html
        lang="en"
        className={` ${cormorant.variable} ${fraunces.variable} ${manrope.variable} h-full antialiased`}
        suppressHydrationWarning={true}
      >
        <head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest"></link>

          {/* <!-- Google Tag Manager --> */}
          <Script
            id="gtm"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PFSF6H54');`,
            }}
          ></Script>
          {/* <!-- End Google Tag Manager --> */}
        </head>
        <body className="min-h-full flex flex-col">
          {/* Meta Pixel */}
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;
          n.push=n;
          n.loaded=!0;
          n.version='2.0';
          n.queue=[];
          t=b.createElement(e);
          t.async=!0;
          t.src=v;
          s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)
          }(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');

          fbq('init', '1777232623408296');
          fbq('track', 'PageView');
        `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=1777232623408296&ev=PageView&noscript=1"
              alt=""
            />
          </noscript>
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PFSF6H54"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          {/* <!-- End Google Tag Manager (noscript) --> */}
          {children}
          <Whatsapp whatsAppNumber={contact.phone[0]} />
          <Call callNumber={contact.phone[0]} />
          {/* <!-- Eazbot Script (Next.js) --> */}
          <Script id="chatbot-config" strategy="afterInteractive">
            {`
              window.eazbotConfig = {
                ndid: "91dd2e18-df27-4f3b-a9ee-700b1fa64019",
                hid: "90882694",
              };
            `}
          </Script>
          <Script
            src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"
            strategy="afterInteractive"
          />
        </body>
      </html>
    );
  }
