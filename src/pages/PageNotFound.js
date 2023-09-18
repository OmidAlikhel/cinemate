import pageNotFoundImage from "../assets/images/pagenotfound.png";

import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { useTitle } from "../hooks";

export const PageNotFound = () => {
  useTitle(`Page Not Found /Cinemate`);

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col  items-center my-4">
          <p className="text-3xl my-5 text-gray-700 dark:text-white font-semibold">
            Opps Page Not Found
          </p>
          <img
            src={pageNotFoundImage}
            className="max-w-lg mt-5 rounded"
            alt="pageNotFound"
          />
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back to Cinemate</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
