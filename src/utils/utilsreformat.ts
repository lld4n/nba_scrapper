export function utilsreformat(html: string) {
  let htmlString = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  htmlString = htmlString.replace(/<!--/g, '');
  htmlString = htmlString.replace(/-->/g, '');
  htmlString = htmlString.replace(/\s+/g, ' ');
  return htmlString;
}
