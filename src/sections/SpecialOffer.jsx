import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => (
  <section className="flex justify-center items-center flex-wrap max-xl:flex-col-reverse gap-10 w-full max-container">
    <div className="flex-1 w-full">
      <img src={offer} alt="offer" width={773} height={687} className="w-full object-contain" />
    </div>

    <div className="flex flex-1 flex-col">
      <h2 className="text-4xl font-palanquin font-bold">
        <span className="text-coral-red">Special</span> Offer
      </h2>
      <p className="mt-4 xl:max-w-lg info-text">
        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to
        incredible savings, we offer unparalleled value that sets us apart.
      </p>
      <p className="mt-6 xl:max-w-lg info-text">
        Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations.
        Your journey with us is nothing short of exceptional.
      </p>

      <div className="mt-11 flex flex-wrap gap-4">
        <Button label="Shop Now" iconURL={arrowRight} />
        <Button
          label="Learn More"
          backgroundColor="bg-white"
          borderColor="border-slate-gray"
          textColor="text-slate-gray"
        />
      </div>
    </div>
  </section>
);

export default SpecialOffer;
