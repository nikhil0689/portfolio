export default function Nav() {
  return (
    <div>
      <header className={`fixed left-0 right-0 top-0 z-20`} id="home">
        <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">
                <a
                  href="#"
                  className="text-white hover:text-white cursor-pointer"
                >
                  Nikhil Portfolio
                </a>
              </h1>
            </div>
            <div>
              <ul className="flex gap-8">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#work"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Work
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
