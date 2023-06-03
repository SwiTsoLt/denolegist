import { MyHead, Navbar } from "../../components/_index.tsx";
import Lawyer from "../../islands/lawyer.tsx";
import { PageProps } from "$fresh/server.ts";
import MyFooter from "../../islands/myFooter.tsx";
import { getData } from "../index.tsx";

export default function Lawyers(props: PageProps) {
  const lawyersData = getData("lawyers")

  return (
    <>
      <MyHead
        title="Адвокат"
        styles={[
          { rel: "stylesheet", href: "/styles/lawyer.css" },
          { rel: "stylesheet", href: "/styles/sections/lawyer.css" },
        ]}
      />
      <div className="lawyer">
        <Navbar />
        <Lawyer name={props.params["name"]} lawyersData={lawyersData} /> 
        <MyFooter lawyersData={getData("lawyers")} />
      </div>
    </>
  );
}
