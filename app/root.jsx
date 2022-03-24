import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import tailwindUrl from './styles/tailwind.css'
import NavBar from "./components/NavBar"
import favicon from '../app/favicon.jpg'
import Footer from './components/Footer'

export function meta() {
  return { 
    title: "Help with drug addiction",
   }
}

export function links() {
  return [
    {rel: 'stylesheet', href: tailwindUrl},
    {rel: 'icon', type: 'image/jpg', href: favicon}
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600;700&display=swap" rel="stylesheet"></link>
        <Meta />
        <Links />
      </head>
      <body className="overflow-x-hidden">
        <NavBar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
