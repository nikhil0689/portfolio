export default function Contact() {
  return (
    <div>
      <section id="contact" className="py-10">
        <div className="container m-auto px-4 sm:py-12">
          <h2 className="text-2xl font-semibold text-blue-500">Contact</h2>
          <div className="pb-2">
            <p className="text-white py-4">
              Submit the form below or shoot me an email at&nbsp;&nbsp;
              <span className=" text-blue-500">
                nikhilchandrashekar6@gmail.com
              </span>
            </p>
          </div>
          <div className="flex items-center justify-center">
            <form
              method="POST"
              action="https://getform.io/f/jbwxrpna"
              className="flex flex-col max-w-[600px] w-full"
            >
              <input
                className="bg-[#0a192f] p-2 rounded-md"
                type="text"
                placeholder="Name"
                name="name"
              />
              <input
                className="my-4 p-2 bg-[#0a192f] rounded-md"
                type="email"
                placeholder="Email"
                name="email"
              />
              <textarea
                className="bg-[#0a192f] p-2 rounded-md"
                name="message"
                rows="10"
                placeholder="Message"
              ></textarea>
              <button
                type="submit"
                className="text-white border-1 rounded-md bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 px-4 py-3 my-8 mx-auto flex items-center"
              >
                {`Let's Collaborate`}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
