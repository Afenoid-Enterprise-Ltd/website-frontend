import { Text, Button } from "../ui";


const Consultation = () => {
  return (
    <div className="w-full flex justify-center items-center my-[10rem]">
      <div className="flex flex-col justify-center items-center gap-3">
        <Text
          variant="h3"
          align="center"
          color="af-dark-green"
          fontWeight="medium"
        >
          Ready to have a conversation with us?
        </Text>
        <Text
          variant="h5"
          color="af-dark-green"
          align="center"
          fontWeight="light"
          fontFamily="proxima-nova"
        >
          Schedule a meeting with a consultant right away.
        </Text>
        <Button
          variant="primary"
          label="Book a Consultation"
          customClassName="mt-[2rem]"
        />
      </div>
    </div>
  );
};

export { Consultation };
