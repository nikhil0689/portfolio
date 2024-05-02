import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import AWS from "../assets/aws.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import Typescript from "../assets/typescript.png";
import Java from "../assets/java.png";
import Nest from "../assets/nestjs.png";
import GraphQL from "../assets/graphql.png";
import Spring from "../assets/spring.png";
import Next from "../assets/nextjs.png";
import MYSQL from "../assets/mysQL.png";

export default function Technologies() {
  return (
    <section id="technologies" className="py-10">
      <div className="container m-auto px-4">
        <h2 className="text-2xl font-semibold text-blue-500">Technologies</h2>
        <div className="mt-1">
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md bg-[#0a192f] rounded-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Typescript} alt="HTML icon" />
              <p className="my-4">Typescript</p>
            </div>
            <div className="shadow-md bg-[#0a192f] rounded-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
              <p className="my-4">Javascript</p>
            </div>
            <div className="shadow-md bg-[#0a192f] rounded-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Java} alt="HTML icon" />
              <p className="my-4">Java</p>
            </div>
            <div className="shadow-md bg-[#0a192f] rounded-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={GraphQL} alt="HTML icon" />
              <p className="my-4">GraphQL</p>
            </div>
            <div className="shadow-md bg-[#0a192f] rounded-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Nest} alt="HTML icon" />
              <p className="my-4">NestJS</p>
            </div>
            <div className="shadow-md bg-[#0a192f] rounded-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Spring} alt="HTML icon" />
              <p className="my-4">Spring Boot</p>
            </div>
            <div className="shadow-md bg-[#0a192f] rounded-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
              <p className="my-4">NodeJS</p>
            </div>
            <div className="shadow-md bg-[#0a192f] rounded-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
              <p className="my-4">React</p>
            </div>
            <div className="shadow-md bg-[#0a192f] rounded-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Next} alt="HTML icon" />
              <p className="my-4">NextJS</p>
            </div>
            <div className="shadow-md bg-[#0a192f] rounded-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
              <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md bg-[#0a192f] rounded-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
              <p className="my-4">CSS</p>
            </div>

            <div className="shadow-md bg-[#0a192f] rounded-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
              <p className="my-4">Tailwind</p>
            </div>

            <div className="shadow-md bg-[#0a192f] rounded-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
              <p className="my-4">Github</p>
            </div>

            <div className="shadow-md bg-[#0a192f] rounded-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={MYSQL} alt="HTML icon" />
              <p className="my-4">MySQL</p>
            </div>

            <div className="shadow-md bg-[#0a192f] rounded-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
              <p className="my-4">Mongo DB</p>
            </div>

            <div className="shadow-md bg-[#0a192f] rounded-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={AWS} alt="HTML icon" />
              <p className="my-4">AWS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
