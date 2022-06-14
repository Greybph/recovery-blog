import { renderToString } from "react-dom/server";
import { RemixServer } from "remix";

export default function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {

  const url = new URL(request.url)
  const urlArray = url.pathname.split("/")

  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");

  if (urlArray.length === 3 && urlArray[1] === 'blog') {
    responseHeaders.set("Link", `<https://www.recoveryocean.com/blog/${urlArray[2]}>; rel="canonical"`)
  }

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
