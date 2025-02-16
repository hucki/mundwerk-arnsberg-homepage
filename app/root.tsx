import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "apple-touch-icon-precomposed",
    sizes: "57x57",
    href: "/favicons/apple-touch-icon-57x57.png",
    type: "image/png",
  },
  {
    rel: "apple-touch-icon-precomposed",
    sizes: "114x114",
    href: "/favicons/apple-touch-icon-114x114.png",
    type: "image/png",
  },
  {
    rel: "apple-touch-icon-precomposed",
    sizes: "72x72",
    href: "/favicons/apple-touch-icon-72x72.png",
    type: "image/png",
  },
  {
    rel: "apple-touch-icon-precomposed",
    sizes: "144x144",
    href: "/favicons/apple-touch-icon-144x144.png",
    type: "image/png",
  },
  {
    rel: "apple-touch-icon-precomposed",
    sizes: "60x60",
    href: "/favicons/apple-touch-icon-60x60.png",
    type: "image/png",
  },
  {
    rel: "apple-touch-icon-precomposed",
    sizes: "120x120",
    href: "/favicons/apple-touch-icon-120x120.png",
    type: "image/png",
  },
  {
    rel: "apple-touch-icon-precomposed",
    sizes: "76x76",
    href: "/favicons/apple-touch-icon-76x76.png",
    type: "image/png",
  },
  {
    rel: "apple-touch-icon-precomposed",
    sizes: "152x152",
    href: "/favicons/apple-touch-icon-152x152.png",
    type: "image/png",
  },
  {
    rel: "icon",
    sizes: "196x196",
    href: "/favicons/favicon-196x196.png",
    type: "image/png",
  },
  {
    rel: "icon",
    sizes: "96x96",
    href: "/favicons/favicon-96x96.png",
    type: "image/png",
  },
  {
    rel: "icon",
    sizes: "32x32",
    href: "/favicons/favicon-32x32.png",
    type: "image/png",
  },
  {
    rel: "icon",
    sizes: "16x16",
    href: "/favicons/favicon-16x16.png",
    type: "image/png",
  },
  {
    rel: "icon",
    sizes: "128x128",
    href: "/favicons/favicon-128.png",
    type: "image/png",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="application-name" content="Mundwerk Logogpädische Praxis" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
        <meta
          name="msapplication-square150x150logo"
          content="mstile-150x150.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="mstile-310x150.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="mstile-310x310.png"
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
