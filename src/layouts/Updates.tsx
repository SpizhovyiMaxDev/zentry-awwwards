import AnimatedTitle from "../ui/AnimatedTitle";
import Button from "../ui/Button";
import UpdateCard from "../ui/UpdateCard";
import { UPDATES_CARDS } from "../data/updates";

function Updates() {
  return (
    <section className="bg-blue-50 py-36">
      <div className="mx-auto flex h-full max-w-[90rem] flex-col gap-20 px-8 md:flex-row">
        <div className="md:flex-1">
          <div className="sticky top-14 max-w-96">
            <AnimatedTitle
              title="Latest <br /> Updates"
              containerClass="mb-8"
              className="justify-start !gap-0 text-7xl lg:text-9xl"
            />

            <p className="font-circular-web text-md mb-5 text-black lg:text-xl">
              Stay updated with the latest news, events, and updates in our
              ecosystem. Be part of our universe's growth and evolution.
            </p>
            <Button containerClass="bg-black text-white">Read All News</Button>
          </div>
        </div>

        <div className="flex flex-col gap-10 md:flex-1">
          {UPDATES_CARDS.map((update) => (
            <UpdateCard key={update.id} update={update} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Updates;
