import { Link } from "react-router-dom";
import { Accordion, AccordionItem } from "../../../components/accordion";
import { CallToAction } from "../../../components";
import { Text, Button } from "../../../ui";

const AccordionSection = () => {
  return (
    <div className="w-full mt-20">
      <div className="w-full flex justify-center items-center">
        <div className="w-[40%]">
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

      <div className="p-[5rem]" id="faqs">
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
          <AccordionItem
            value="4"
            trigger="Who does Afenoid serve?"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            asperiores corporis perferendis voluptatibus delectus iste eos
            eveniet consequatur et! Voluptates ex minima magni dolorem inventore
            voluptas iste laboriosam odit quia?
          </AccordionItem>
        </Accordion>
      </div>

      <CallToAction
          title="Ready to have a conversation with us?"
          explanation="Schedule a meeting with a consultant right away"
          button={
            <Button
              variant="primary"
              label="Book a Consultation"
              customClassName="mt-[2rem"
            />
          }
        />
    </div>
  );
};

export { AccordionSection };
