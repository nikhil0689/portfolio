import { data } from "../data/data.js";
import Carousel from "./Carousel.jsx";

export default function Projects() {
  const project = data;
  return (
    <section id="projects" className="py-10">
      <div className="container m-auto px-4 sm:py-12">
        <h2 className="text-2xl font-semibold text-blue-500">Projects</h2>

        {project.map((item, index) => (
          <div key={index} className="flex flex-col sm:flex-row gap-10 mt-10">
            <div className="bg-[#0a192f] rounded-md p-5 shadow-md shadow-[#526e99] flex-1 hover:scale-110 duration-500">
              <h3 className="text-md font-semibold mb-4 text-gray-300">
                {item.name}
              </h3>
              <Carousel className="w-full h-auto" autoSlide={true} key={index}>
                {[...item.image.map((s, i) => <img key={i} src={s} />)]}
              </Carousel>
            </div>
            <div className="bg-[#0a192f] shadow-md shadow-[#526e99] rounded-md p-5 flex-1 hover:scale-110 duration-500">
              <h3 className="text-md font-semibold mb-2">Details</h3>
              <p className="text-gray-300 text-sm mt-2">{item.description}</p>
              <div className="flex mt-12 gap-2">
                <button className="flex-1 text-sm py-3 rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                  <a href={item.live} target="_blank">
                    Live
                  </a>
                </button>
                {item.github ? (
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    <a href={item.github} target="_blank">
                      Github
                    </a>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
