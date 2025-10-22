import { Card } from "./ui/card";
import { FaGithub, FaTelegram } from "react-icons/fa";

export function Contact() {
  return (
    <div>
      <section id="contact" className="w-full max-w-3xl flex flex-col sm:flex-row py-16 px-4 mx-auto  items-center gap-12">
        <div>
          <h2 className="text-6xl font-semibold mb-2">Давайте свяжемся!</h2>
          <p className="text-xl">
            Всегда заинтересован в возможностях , работе над продуктами,
            развитии навыков
          </p>
          <p className="underline mt-2">timofei.yelivanov@gmail.com →</p>
        </div>
        <div className="grid grid-flow-col sm:grid-flow-row gap-x-5 gap-y-6">
          <a href="https://t.me/TimElesh">
            <Card
              tabIndex={0}
              className="p-8 hover:bg-gray-950 focus:outline-1 focus:outline-offset-2 focus:outline-black dark:focus:outline-white duration-200"
            >
              <FaTelegram className="w-8 h-8" />
            </Card>
          </a>

          <a href="https://github.com/Tetrabiter">
            <Card
              tabIndex={0}
              className="p-8 hover:bg-gray-950 focus:outline-1 focus:outline-offset-2 focus:outline-black dark:focus:outline-white duration-200"
            >
              <FaGithub className="w-8 h-8" />
            </Card>
          </a>
        </div>
      </section>
    </div>
  );
}
