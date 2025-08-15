import HeartSvg from "../assets/svg/heart";
import GithubLogo from "../assets/svg/github_logo";
import LinkedInLogo from "../assets/svg/linkedin_logo";
import EmailLogo from "../assets/svg/email_logo";

export default function footer() {
  return (
    <>
      <div
        className="shrink 
                flex flex-col items-center justify-between
                md:flex-row md:items-baseline
            "
      >
        <span className="flex flex-row align-middle items-baseline gap-1 pb-2">
          <p>© 2025 Made with </p>
          <HeartSvg />
          <p>Sahil Gathe </p>
        </span>
        <div className="flex flex-row mx-5 items-center">
          <a
            href="https://github.com/IndiSnacks"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            <GithubLogo />
          </a>
          <a
            href="https://www.linkedin.com/in/sahilgathe/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            <LinkedInLogo />
          </a>
          <a
            href="mailto:sahilsg.work@gmail.com"
            className="mx-2"
          >
            <EmailLogo />
          </a>
        </div>
      </div>
    </>
  );
}
