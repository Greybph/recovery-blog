import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  json,
  useLocation
} from "remix";
import tailwindUrl from './styles/tailwind.css'
import NavBar from "./components/navigation/NavBar"
import favicon from '../app/assets/logo.svg'
import ScrollNav from "./components/navigation/ScrollNav"
import Footer from './components/Footer'
import {useEffect} from 'react'
import mongoose from '~/utils/mongoose.server'
import * as gtag from "~/utils/gtags.client"
import ErrorPage from '~/components/ErrorPage'

export function meta() {
  return { 
    "theme-color": "#e2e8f0",
    title: "RecoveryOcean | Drug Addiction & Recovery Awareness",
   }
}

export function CatchBoundary() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600;700&display=swap" rel="stylesheet"></link>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <NavBar />
        <ScrollNav />
        <ErrorPage />
        <Scripts />
      </body>
    </html>
  )
}

export function ErrorBoundary() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600;700&display=swap" rel="stylesheet"></link>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <NavBar />
        <ScrollNav />
        <ErrorPage error={true}/>
        <Scripts />
      </body>
    </html>
  )
}

export function links() {
  return [
    {rel: 'stylesheet', href: tailwindUrl},
    {rel: 'icon', type: 'image/jpg', href: favicon}
  ]
}

export const loader = async () => {
  mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(err => console.error(`Unable to connect to mongodb instance. Error: ${err}`))
  return json({ gaTrackingId: process.env.GA_TRACKING_ID });
}

export default function App() {
  const location = useLocation()
  const { gaTrackingId } = useLoaderData()

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId)
    }
  }, [location, gaTrackingId])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600;700&display=swap" rel="stylesheet"></link>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" defer></script>        
        <Meta />
        <Links />
      </head>
      <body>
        {process.env.NODE_ENV === "development" || !gaTrackingId ?    null : (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
              />
              <script
                async
                id="gtag-init"
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaTrackingId}', {
                    page_path: window.location.pathname,
                  });
                `,
                }}
              />
            </>
          )}
        <NavBar />
        <ScrollNav />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
