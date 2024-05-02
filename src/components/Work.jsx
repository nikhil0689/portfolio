/* eslint-disable react/prop-types */
import { data } from "../data/experience.js";

export default function Work() {
  const experience = data;
  return (
    <section id="work" className="py-10">
      <div className="container m-auto px-4 sm:py-12">
        <h2 className="text-2xl font-semibold text-blue-500 mt-5">
          Work Experience
        </h2>
        <div className="">
          <div className="py-2">
            <Timeline experience={experience} />
          </div>
        </div>
      </div>
    </section>
  );
}

const TimelineItem = ({ job }) => {
  const points = job.description.split("\n");
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <div>
          <h2 className="font-semibold text-lg">{job.title}</h2>
          <p className="text-gray-500">{job.company}</p>
        </div>
        <p className="text-gray-500">{job.date}</p>
      </div>
      {/* Render each point as a list item */}
      <ul className="list-disc pl-8 text-gray-300 p-2">
        {points.map((point, index) => (
          <li className="text-blue-400" key={index}>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Timeline = ({ experience }) => {
  return (
    <div className="text-sm p-2">
      {experience.map((job, index) => (
        <TimelineItem key={index} job={job} />
      ))}
    </div>
  );
};
