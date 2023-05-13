import parts from "../../../../assets/images/about_us/parts.jpg";
import person from "../../../../assets/images/about_us/person.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-white border-8" />
        </div>
              <div className="lg:w-1/2 space-y-5">
              <h1 className="text-3xl  text-orange-500 font-bold">About Us</h1>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
          <p className="py-6">
          Cars are likely subjects to dents and dings and getting one is no fun. Dents range in size and magnitude, definitely becomes an eyesore. Not to mention, some dents can even affect the value of your vehicle! 
                  </p>
                  <p>
                  the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
                  </p>
          <button className="btn btn-warning">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
