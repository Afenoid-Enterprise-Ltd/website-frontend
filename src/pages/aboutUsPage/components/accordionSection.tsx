import React from "react";
import { Link } from "react-router-dom";
import { Accordion, AccordionItem } from "../../../components/accordion";
import { CallToAction } from "../../../components";
import { Text, Button } from "../../../ui";

interface AccordionProps {
  openConsultationModal: () => void;
}

const AccordionSection: React.FC<AccordionProps> = (props) => {
  const { openConsultationModal } = props;

  return (
    <div className="w-full mt-20">
      <div className="w-full flex justify-center items-center">
        <div className="w-[40%] mlg:w-[60%] msm:w-[70%] mxs:w-[80%]">
          <Text
            variant="h2"
            fontWeight="regular"
            fontFamily="gambetta"
            align="center"
            customClassName="uppercase"
          >
            Frequently Asked Questions
          </Text>
          <p></p>
          <Text
            variant="h5"
            fontWeight="medium"
            fontFamily="proxima-nova"
            align="center"
          >
            Can't find the answer you're looking for? Reach out to our service
            support team with{" "}
            <Link
              to="mailto:serveme@afenoid.com"
              className="font-semibold text-afenoid-lemon underline underline-offset-2"
            >
              serveme@afenoid.com
            </Link>
          </Text>
        </div>
      </div>

      <div className="p-[5rem] msm:p-[3rem]" id="faqs">
        <Accordion>
          <AccordionItem value="1" trigger="Who is Afenoid?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            asperiores corporis perferendis voluptatibus delectus iste eos
            eveniet consequatur et! Voluptates ex minima magni dolorem inventore
            voluptas iste laboriosam odit quia?
          </AccordionItem>
          <AccordionItem value="2" trigger="What services does Afenoid offer?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            asperiores corporis perferendis voluptatibus delectus iste eos
            eveniet consequatur et! Voluptates ex minima magni dolorem inventore
            voluptas iste laboriosam odit quia?
          </AccordionItem>
          <AccordionItem
            value="3"
            trigger="What management systems and frameworks does Afenoid provide?"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            asperiores corporis perferendis voluptatibus delectus iste eos
            eveniet consequatur et! Voluptates ex minima magni dolorem inventore
            voluptas iste laboriosam odit quia?
          </AccordionItem>
          <AccordionItem value="4" trigger="Who does Afenoid serve?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            asperiores corporis perferendis voluptatibus delectus iste eos
            eveniet consequatur et! Voluptates ex minima magni dolorem inventore
            voluptas iste laboriosam odit quia?
          </AccordionItem>
        </Accordion>
      </div>

      <div className="bg-afenoid-light-lemon px-[5rem] py-10 flex gap-8 msm:px-[3rem] mxs:flex-col">
        <div className="w-1/2 mxs:w-full"></div>
        <div className="w-1/2 mxs:w-full">
          <Text
            variant="h2"
            fontFamily="gambetta"
            align="left"
            color="af-dark-green"
            fontWeight="medium"
            customClassName="msm:text-[1.5rem] mlg:text-[2.25rem] "
          >
            Come and say Hi!
          </Text>
          <Text
            variant="h6"
            fontFamily="proxima-nova"
            align="left"
            color="af-dark-green"
            fontWeight="light"
            customClassName="mb-8 msm:text-[0.75rem] mlg:text-[0.875rem]"
          >
            Interested in visiting one of our offices? We’d be more than happy
            to show you around!
          </Text>
          <Link to="https://maps.app.goo.gl/C8w9ZvwS6Ei9npLz5" target="_blank">
            <Text
              variant="h5"
              fontFamily="proxima-nova"
              align="left"
              color="af-dark-green"
              fontWeight="light"
              customClassName="msm:text-[0.875rem] mlg:text-[1rem] hover:underline underline-offset-1"
            >
              Block B, Ground Floor AUJ Complex, 564/565 Independence Ave,
              Central Business District, 900211, Abuja.
            </Text>
          </Link>
        </div>
      </div>

      <CallToAction
        title="Ready to have a conversation with us?"
        explanation="Schedule a meeting with a consultant right away"
        button={
          <Button
            variant="primary"
            label="Book a Consultation"
            customClassName="mt-[2rem]"
            onClick={openConsultationModal}
          />
        }
      />
    </div>
  );
};

export { AccordionSection };
