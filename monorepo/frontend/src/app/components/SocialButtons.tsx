import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";

interface SocialButtonsProps {
  containerStyles?: string;
  iconStyles?: string;
}

const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/chang-chuy-690ab5a2/",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/ChangChuy",
    },
  ];
  
  const SocialButtons: React.FC<SocialButtonsProps> = ({ containerStyles = "", iconStyles = "" }) => {
    return (
      <div className={containerStyles}>
        {socialLinks.map((item, index) => (
          <Link key={index} href={item.url} className={iconStyles}>
            {item.icon}
          </Link>
        ))}
      </div>
    );
  };
  
  export default SocialButtons;