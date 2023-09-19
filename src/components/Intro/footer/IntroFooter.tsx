import "./IntroFooter.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import IconLink from "./Icon";
const IntroFooter = () => {
  const size = 20;
  return (
    <div
      style={{
        height: 150,
        backgroundColor: "#111111",
        display: "flex",
        flexDirection: "row",

        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <IconLink
        Icon={BsGithub}
        iconSize={size}
        text={"GitHub"}
        href="https://github.com/aswds"
      />

      <IconLink
        Icon={BsLinkedin}
        iconSize={size}
        text={"LinkedIn"}
        href="https://www.linkedin.com/in/sasha-ilnitskiy-a16747249/"
      />
      <IconLink
        Icon={MdOutlineMail}
        iconSize={size}
        text={"Email"}
        href="mailto:sashailnitskiyy@gmail.com"
      />
    </div>
  );
};

export default IntroFooter;
