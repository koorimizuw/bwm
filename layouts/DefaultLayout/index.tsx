import React, { PropsWithChildren } from "react";
import Head from "next/head";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = PropsWithChildren<{
  title?: string;
  divider?: boolean;
}>;

export const DefaultLayout = ({
  children,
  title = "This is the default title",
  divider = false,
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header divider={divider} />
    {children}
    <Footer />
  </div>
);
