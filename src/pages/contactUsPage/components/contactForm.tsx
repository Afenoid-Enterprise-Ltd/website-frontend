import { Button, Text } from "../../../ui";

const ContactForm = () => {
  return (
    <div className="w-full">
      <Text
        variant="h3"
        color="af-dark-green"
        fontFamily="raleway"
        fontWeight="light"
        customClassName=""
      >
        Kindly fill this form
      </Text>

      <form className="flex flex-col gap-12 mt-9">
        <div className="flex flex-col gap-3">
          <label
            htmlFor="firstName"
            className="text-xl text-afenoid-dark-green font-bold font-raleway"
          >
            FIRST NAME <span className="text-[#F12222] ml-1">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            required
            placeholder="Ndubuisi"
            className="border border-[#9D9595] py-4 px-3 bg-[#F8FAF4] text-lg font-proxima-nova font-light focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="lastName"
            className="text-xl text-afenoid-dark-green font-bold font-raleway"
          >
            LAST NAME <span className="text-[#F12222] ml-1">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            required
            placeholder="Onyeukwu"
            className="border border-[#9D9595] py-4 px-3 bg-[#F8FAF4] text-lg font-proxima-nova font-light focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="email"
            className="text-xl text-afenoid-dark-green font-bold font-raleway"
          >
            EMAIL <span className="text-[#F12222] ml-1">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="ndubuisi@afenoid.com"
            className="border border-[#9D9595] py-4 px-3 bg-[#F8FAF4] text-lg font-proxima-nova font-light focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label
            htmlFor="service"
            className="text-xl text-afenoid-dark-green font-bold font-raleway"
          >
            SERVICE <span className="text-[#F12222] ml-1">*</span>
          </label>
          <select
            id="service"
            required
            className="border border-[#9D9595] py-4 px-3 bg-[#F8FAF4] text-lg font-proxima-nova font-light focus:outline-none"
          >
            <option value="digitalConsulting">
              Digital Transformation Consulting
            </option>
            <option value="digitalConsulting">
              Digital Transformation Consulting
            </option>
            <option value="digitalConsulting">
              Digital Transformation Consulting
            </option>
          </select>
        </div>

        <div className="flex flex-col gap-3">
          <label
            htmlFor="country"
            className="text-xl text-afenoid-dark-green font-bold font-raleway"
          >
            COUNTRY <span className="text-[#F12222] ml-1">*</span>
          </label>
          <select
            id="country"
            required
            className="border border-[#9D9595] py-4 px-3 bg-[#F8FAF4] text-lg font-proxima-nova font-light focus:outline-none"
          >
            <option value="nigeria">Nigeria</option>
            <option value="nigeria">Nigeria</option>
            <option value="nigeria">Nigeria</option>
          </select>
        </div>

        <div className="flex flex-col gap-3">
          <label
            htmlFor="message"
            className="text-xl text-afenoid-dark-green font-bold font-raleway"
          >
            MESSAGE <span className="text-[#F12222] ml-1">*</span>
          </label>
          <textarea
            id="message"
            required
            placeholder="Hello"
            className="border border-[#9D9595] py-4 px-3 bg-[#F8FAF4] text-lg font-proxima-nova font-light h-[17rem] focus:outline-none"
          ></textarea>
        </div>
        <div>
            <Button variant="primary" label="Submit"/>
        </div>
      </form>
    </div>
  );
};

export { ContactForm };
