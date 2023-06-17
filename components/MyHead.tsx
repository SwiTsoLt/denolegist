import { Head } from "$fresh/runtime.ts";

interface IStyle {
  rel: string;
  href: string;
}

interface IScript {
  defer?: boolean,
  async?: boolean,
  type?: string,
  src: string
}

interface IMyHead {
  title: string;
  styles?: IStyle[];
  scripts?: IScript[]
}

export default function MyHead(props: IMyHead) {
  const defaultStyles: IStyle[] = [
    { rel: "stylesheet", href: "/styles/variables.css" },
    { rel: "stylesheet", href: "/styles/zero.css" },
    { rel: "stylesheet", href: "/styles/navbar.css" },
    { rel: "stylesheet", href: "/styles/navbarMobile.css" },
    { rel: "stylesheet", href: "/styles/footer.css" },
  ];

  const defaultScripts: IScript[] = []

  return (
    <Head>
      <title>{props.title}</title>
      {[...defaultStyles, ...props.styles || []].map((style: IStyle) => (
        <link rel={style.rel} href={style.href} />
      ))}
      {[...defaultScripts, ...props.scripts || []].map((script: IScript) => (
        <script src={script.src} defer={script.defer} async={script.async} type={script.type ?? "text/javascript"} />
      ))}
    </Head>
  );
}
