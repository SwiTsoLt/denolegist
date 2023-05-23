import { Head } from "$fresh/runtime.ts";

interface IStyle {
  rel: string;
  href: string;
}

interface IMyHead {
  title: string;
  styles: IStyle[];
}

export default function MyHead(props: IMyHead) {
  const defaultStyles = [
    { rel: "stylesheet", href: "/styles/variables.css" },
    { rel: "stylesheet", href: "/styles/zero.css" },
    { rel: "stylesheet", href: "/styles/navbar.css" },
    { rel: "stylesheet", href: "/styles/footer.css" },
  ];

  return (
    <Head>
      <title>{props.title}</title>
      {[...defaultStyles, ...props.styles].map(({ rel, href }) => (
        <link rel={rel} href={href} />
      ))}
    </Head>
  );
}
