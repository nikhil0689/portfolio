import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Developed by Nikhil - 2024</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a href="https://github.com/nikhil0689" target="_blank">
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nikhilchandrashekar"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
