import AnimatedTitle from "../ui/AnimatedTitle";
import Button from "../ui/Button";

function Contact() {
  return (
    <section className="bg-blue-50 py-10">
      <div className="px-2.4 mx-auto max-w-[90dvw]">
        <div className="rounded-lg bg-black py-30 text-center text-blue-50">
          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of  gaming <br /> t<b>o</b>gether."
            containerClass="special-font "
          />

          <Button containerClass="mt-10 cursor-pointer">Contact Us</Button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
