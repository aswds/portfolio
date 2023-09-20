import { IconType } from "react-icons/lib";
import "./IntroFooter.scss";
interface IconLinkProps {
  Icon: IconType;
  iconSize: number;
  text: "LinkedIn" | "GitHub" | "Email";
  href: string;
}

export default function IconLink({
  Icon,
  iconSize,
  text,
  href,
}: IconLinkProps) {
  const colors = {
    GitHub: "white",
    LinkedIn: "#0077B5",
    Email: "white",
  };
  return (
    <a className="link" target="_blank" href={href}>
      <div className="link-container">
        <Icon
          size={iconSize}
          color={colors[text]}
          style={{ margin: "0px 5px" }}
        />
        {text}
      </div>
    </a>
  );
}
