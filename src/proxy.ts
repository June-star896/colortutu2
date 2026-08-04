import createMiddleware from "next-intl/middleware";
import {NextRequest, NextResponse} from "next/server";
import {routing} from "./i18n/routing";

const intlMiddleware=createMiddleware(routing);
export default function proxy(request:NextRequest){
  if(request.nextUrl.pathname==="/")return NextResponse.redirect(new URL("/en",request.url),308);
  if(request.nextUrl.pathname==="/pt"||request.nextUrl.pathname.startsWith("/pt/"))return NextResponse.next();
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"]
};
