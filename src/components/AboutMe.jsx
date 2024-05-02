import profileImage from "/head_shot.jpg";
import pdf from "/Nikhil_Chandrashekar_Resume.pdf";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function AboutMe() {
  return (
    <div>
      <section id="about">
        <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
          <div>
            <h2 className="font-bold text-4xl">
              {`Hello, I'm Nikhil Chandrashekar,`}
            </h2>
            <div>
              <h2 className="font-bold text-4xl mt-1 gradiant-text">
                Software Engineer
              </h2>
            </div>
            <div>
              <p className="mt-4 text-gray-400">
                {`I'm a Dynamic and results-driven Software Engineer with over 7
                years of experience in Backend and Frontend development.`}
              </p>
              <p className="mt-4 text-gray-400">
                {`I'm passionate about building excellent software that improves
                the lives of those around me. I possess strong problem-solving
                abilities and commitment to delivering results in fast-paced,
                Agile environments.`}
              </p>

              <div className="mt-6 flex items-center md:justify-start justify-center gap-6 ">
                <a href="https://github.com/nikhil0689" target="_blank">
                  <GitHubIcon />
                </a>
                <a
                  href="https://linkedin.com/in/nikhilchandrashekar"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
              </div>

              <div className="mt-10 pt-5 md:mb-0 mb-5">
                <a
                  className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-white rounded-md"
                  href={pdf}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Download resume
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="border-4 rounded-full border-blue-600">
              <img
                src={profileImage}
                className="relative z-10 w-[280px] m-auto sm:w-[600px] rounded-full hover:scale-110 duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
