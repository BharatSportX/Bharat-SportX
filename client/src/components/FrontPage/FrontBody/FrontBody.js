import React, { useState } from "react";

import BodyCard from "./BodyCard";
import BodyQN from "./BodyQN";

const FrontBody = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="">
      {/* <BodyCard
        header="hey man"
        mutedheader=" for you man"
        content=" here every one comes and loss his money ha ha ha"
        paragraphorder="1"
        imgorder="2"
        img="https://source.unsplash.com/random/500x450/?footballer"
      />
      <BodyCard
        header="hey man"
        mutedheader=" for you man"
        content=" here every one comes and loss his money ha ha ha"
        paragraphorder="2"
        imgorder="1"
        img="https://source.unsplash.com/random/500x450/?cricket"
      />
      <BodyCard
        header="hey man"
        mutedheader=" for you man"
        content=" here every one comes and loss his money ha ha ha"
        paragraphorder="1"
        imgorder="2"
        img="https://source.unsplash.com/random/500x450/?hockey"
      />
      <BodyCard
        header="hey man"
        mutedheader=" for you man"
        content=" here every one comes and loss his money ha ha ha"
        paragraphorder="2"
        imgorder="1"
        img="https://source.unsplash.com/random/500x450/?ludo"
      /> */}
      <BodyCard
  header="Experience the Thrill of Bharat Sports"
  mutedheader="Get Ready for Action-Packed Moments"
  content="Join the excitement as athletes compete fiercely, showcasing their skills and determination. From cricket to hockey, from kabaddi to badminton, Bharat SpotX brings you the best of Indian sports. Immerse yourself in the thrill of live matches, stay updated with scores, fixtures, and player statistics, all in one place."
  paragraphorder="1"
  imgorder="2"
  img="https://source.unsplash.com/random/500x450/?footballer"
/>
<BodyCard
  header="Dive Into the Heart of Bharat Sports"
  mutedheader="Your Gateway to Sporting Excellence"
  content="Feel the adrenaline rush as legends are born on the field. Whether it's cricket's glorious sixes, hockey's lightning-fast goals, or kabaddi's strategic brilliance, Bharat SpotX keeps you at the edge of your seat with free updates on matches, scores, and head-to-head stats. Elevate your sports viewing experience with us!"
  paragraphorder="2"
  imgorder="1"
  img="https://source.unsplash.com/random/500x450/?cricket"
/>
<BodyCard
  header="Unleash the Power of Bharat Sports"
  mutedheader="Where Every Moment Counts"
  content="Witness the passion, the intensity, and the spirit of Indian sports like never before. With Bharat SpotX, every game becomes a spectacle, every victory a celebration. From cricket fever to hockey hysteria, our comprehensive coverage ensures you never miss a beat. Get ready to be thrilled!"
  paragraphorder="1"
  imgorder="2"
  img="https://source.unsplash.com/random/500x450/?hockey"
/>
<BodyCard
  header="Embark on a Journey with Bharat SpotX"
  mutedheader="Your Ultimate Sports Companion"
  content="Indulge in the excitement of Ludo tournaments or immerse yourself in the strategic brilliance of chess. With Bharat SpotX, the thrill of live sports extends beyond the field. Stay ahead of the game with free updates, expert analysis, and exclusive content. Elevate your sports viewing experience with us!"
  paragraphorder="2"
  imgorder="1"
  img="https://source.unsplash.com/random/500x450/?ludo"
/>

      <div className="bg-black">
        <h1 className="text-4xl p-11 leading-snug lg:text-5xl text-white text-center pt-12 pb-6 font-[Rowdies,sans-serif] lg:font-bold">
          FAQ{" "}
        </h1>

        {/* FAQ Accordion Items */}
        <BodyQN
          title="What is Bharat SportX?"
          answer="BharatSportX is your one-stop destination for all things sports-related. It's a comprehensive website offering live scores, fixtures, player details, news, predictions, statistics, and much more across various sports."
          isOpen={openAccordionIndex === 0}
          toggleAccordion={() => toggleAccordion(0)}
        />
        <BodyQN
          title="What sports are covered?"
          answer="BharatSportX covers a wide range of sports including cricket, football, tennis, basketball, hockey, and more."
          isOpen={openAccordionIndex === 1}
          toggleAccordion={() => toggleAccordion(1)}
        />
        <BodyQN
          title="How to access live scores?"
          answer="You can access live scores by navigating to the respective sport's page on BharatSportX. Live scores are updated in real-time."
          isOpen={openAccordionIndex === 2}
          toggleAccordion={() => toggleAccordion(2)}
        />
        <BodyQN
          title="Player details availability?"
          answer="Absolutely! BharatSportX provides comprehensive player details including profiles, statistics, and performance analysis."
          isOpen={openAccordionIndex === 3}
          toggleAccordion={() => toggleAccordion(3)}
        />
        <BodyQN
          title="Where to find fixtures?"
          answer="Fixture details for upcoming matches can be found on BharatSportX. You can check match schedules and plan your viewing accordingly."
          isOpen={openAccordionIndex === 4}
          toggleAccordion={() => toggleAccordion(4)}
        />
        <BodyQN
          title="Is there any news section?"
          answer="Yes, BharatSportX offers a dedicated news section where you can find the latest updates, insights, and analysis on various sports events and developments."
          isOpen={openAccordionIndex === 5}
          toggleAccordion={() => toggleAccordion(5)}
        />
        <BodyQN
          title="Predictions on matches?"
          answer="BharatSportX provides a platform for users to make predictions on matches. You can participate in prediction contests and compete with other users to test your sports knowledge."
          isOpen={openAccordionIndex === 6}
          toggleAccordion={() => toggleAccordion(6)}
        />
        <BodyQN
          title="Statistics availability?"
          answer="Yes, BharatSportX offers comprehensive statistics for various sports including player stats, team stats, match stats, and more. You can delve deep into the numbers and analyze the performance of your favorite players and teams."
          isOpen={openAccordionIndex === 7}
          toggleAccordion={() => toggleAccordion(7)}
        />
        <BodyQN
          title="Mobile app availability?"
          answer="No, we are currently focused on delivering the best experience through our web version and mobile website. However, stay tuned as we are working on launching mobile apps for both iOS and Android platforms in the near future, providing you with access to live scores, player statistics, and match predictions on the go."
          isOpen={openAccordionIndex === 8}
          toggleAccordion={() => toggleAccordion(8)}
        />
        {/* Subscribe Features Accordion Item */}
        <h1 className="text-3xl p-11 leading-snug lg:text-5xl text-white text-center pt-12 pb-6 font-[Rowdies,sans-serif] lg:font-bold">
          Subscribe Features{" "}
        </h1>

        <BodyQN
          title="Subscription Features"
          answer={
            <div>
              <p className="mb-4 font-bold">
                Subscribing to BharatSportX unlocks a range of additional
                features designed to enhance your sports experience. Some of
                these features include:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2 flex flex-col">
                  <span className="flex items-center">
                    <svg
                      className="h-5 w-5 mr-2 mt-1 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    <span className="font-bold">Advanced statistics:</span>
                  </span>
                  <span className="ml-8">
                    Access in-depth player and team statistics, including
                    historical data and performance trends.
                  </span>
                </li>
                {/* Other subscription features */}

                <li className="mb-2 flex flex-col">
                  <span className="flex items-center">
                    <svg
                      className="h-5 w-5 mr-2 mt-1 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    <span className="font-bold">
                      Enhanced prediction tools:
                    </span>
                  </span>
                  <span className="ml-8">
                    Gain access to advanced prediction algorithms and insights,
                    improving the accuracy of your match predictions.
                  </span>
                </li>
                <li className="mb-2 flex flex-col">
                  <span className="flex items-center">
                    <svg
                      className="h-5 w-5 mr-2 mt-1 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    <span className="font-bold">
                      Player details with prediction statistics:
                    </span>
                  </span>
                  <span className="ml-8">
                    Explore detailed player profiles with integrated prediction
                    statistics, allowing you to make informed decisions based on
                    player performance and potential outcomes.
                  </span>
                </li>
                <li className="mb-2 flex flex-col">
                  <span className="flex items-center">
                    <svg
                      className="h-5 w-5 mr-2 mt-1 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    <span className="font-bold">Exclusive content:</span>
                  </span>
                  <span className="ml-8">
                    Enjoy exclusive articles, interviews, and analysis from
                    renowned sports experts, providing valuable insights and
                    perspectives.
                  </span>
                </li>
                <li className="mb-2 flex flex-col">
                  <span className="flex items-center">
                    <svg
                      className="h-5 w-5 mr-2 mt-1 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    <span className="font-bold">Personalized experience:</span>
                  </span>
                  <span className="ml-8">
                    Customize your dashboard and notifications to receive
                    updates tailored to your favorite teams, players, and
                    leagues.
                  </span>
                </li>
                <li className="mb-2 flex flex-col">
                  <span className="flex items-center">
                    <svg
                      className="h-5 w-5 mr-2 mt-1 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    <span className="font-bold">
                      Priority customer support:
                    </span>
                  </span>
                  <span className="ml-8">
                    Receive priority assistance from our dedicated support team,
                    ensuring that your questions and concerns are addressed
                    promptly and effectively.
                  </span>
                </li>
              </ul>
            </div>
          }
          isOpen={openAccordionIndex === 9}
          toggleAccordion={() => toggleAccordion(9)}
        />

        <BodyQN
          title="Subscription Benefits"
          answer="Subscribing to BharatSportX unlocks a range of benefits, including access to exclusive content, advanced features such as personalized notifications and alerts, ad-free browsing experience, and priority customer support."
          isOpen={openAccordionIndex === 10}
          toggleAccordion={() => toggleAccordion(10)}
        />

        <BodyQN
          title="Trial Period"
          answer="Yes, BharatSportX offers a trial period for new subscribers. During this period, you can explore the platform and its features before making a commitment. The duration of the trial period may vary, so be sure to check the current offer."
          isOpen={openAccordionIndex === 11}
          toggleAccordion={() => toggleAccordion(11)}
        />

        <BodyQN
          title="Cancellation Policy"
          answer="Yes, you can cancel your subscription to BharatSportX at any time. There are no long-term contracts or commitments, and you can manage your subscription settings directly from your account dashboard."
          isOpen={openAccordionIndex === 12}
          toggleAccordion={() => toggleAccordion(12)}
        />

        {/* Subscription Button */}
        <div className="text-white flex justify-center flex-col items-center text-lg p-10 md:text-xl">
          <p className="text-center">
            Ready To Subscribe? Click Subscribe Button to get access.{" "}
          </p>
          <div className="my-5">
            <button className="w-24 py-6 px-20 md:py-8 md:px-32 md:text-3xl md:w-36 BtnEx z-10">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      {/* add footer tag here  */}
    </div>
  );
};

export default FrontBody;
