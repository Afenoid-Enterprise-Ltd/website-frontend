import { Text } from "../../../ui";

const PolicySection = () => {
  const firstPims = [
    "Precise and consistently updated.",
    "Collected legitimately and with a clearly stated purpose",
    "Processed following legal and ethical bindings",
    "Protected from any unauthorized or illegal access",
  ];

  const secondPims = [
    "Communicated informally",
    "Stored for longer than the determined retention period",
    "Transferred to organizations, states, or countries that do not provide proper protection of PII",
    "Shared with other parties, unless approved by the PII principal",
  ];

  return (
    <section className="w-screen bg-white px-[20rem] py-[5rem] flex justify-center items-start mlg:px-[15rem] mmd:px-[10rem] msm:px-[8rem] mxs:px-[5rem] mxxss:px-[3rem]">
      <div>
        <div className="mb-12">
          <Text
            variant="h5"
            color="af-green"
            customClassName="mb-4 font-semibold"
          >
            Information Security Management System (ISMS) Policy 
          </Text>
          <Text
            variant="body-reg"
            color="af-dark-green"
            customClassName="text-justify"
          >
            Afenoid maintains an information security management system in
            accordance with the ISO27001 standard, ensuring the confidentiality,
            integrity, and availability of its information and information
            assets, considering the risks being faced by the organization.
          </Text>
        </div>

        <div className="mb-12">
          <div className="mb-12">
            <Text
              variant="h5"
              color="af-green"
              customClassName="mb-4 font-semibold"
            >
              Personal Information Management System (PIMS) Policy
            </Text>
            <Text
              variant="body-reg"
              color="af-dark-green"
              customClassName="mb-4 text-justify"
            >
              Afenoid collects, stores, and processes personal email
              addresses.  Other Personally Identifiable Information (PII) such
              as full name, phone number, birth date, etc., is collected only
              after obtaining consent from the PII principals. Once collected,
              the following rules apply to all circumstances with no
              exceptions.  
            </Text>
            <Text
              variant="body-reg"
              color="af-green"
              customClassName="mb-4 font-semibold"
            >
              PII shall be:
            </Text>
            <ul className="list-disc ml-6 mb-4">
              {firstPims.map((pim) => (
                <li className="font-afenoid-dark-green text-body-reg font-normal text-justify mxs:text-[0.75rem]">
                  {pim}
                </li>
              ))}
            </ul>
            <Text
              variant="body-reg"
              color="af-green"
              customClassName="mb-4 font-semibold"
            >
              PII shall be:
            </Text>
            <ul className="list-disc ml-6 mb-4">
              {secondPims.map((pim) => (
                <li className="font-afenoid-dark-green text-body-reg font-normal text-justify mxs:text-[0.75rem]">
                  {pim}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <Text
              variant="h5"
              color="af-green"
              customClassName="mb-4 font-semibold"
            >
              Disclosure
            </Text>
            <Text
              variant="body-reg"
              color="af-dark-green"
              customClassName="text-justify"
            >
              Under specific circumstances and when required, Afenoid can
              disclose PII to law enforcement agencies without obtaining consent
              from the PII principal. However, Afenoid will ensure the request
              is legitimate by seeking assistance from legal advisors, when
              necessary.
            </Text>
          </div>
          <div>
            <Text
              variant="h5"
              color="af-green"
              customClassName="mb-4 font-semibold"
            >
              Cookies
            </Text>
            <Text
              variant="body-reg"
              color="af-dark-green"
              customClassName="text-justify"
            >
              Our website uses cookies and similar technologies for various
              purposes, which we outline in this notice. For simplicity, we use
              the term 'cookies' to include both cookies and related
              technologies. While some cookies require your consent before being
              used, others do not. Afenoid employs cookies as small data files
              stored on your device’s browser that can be retrieved by the
              website. You can adjust your browser settings to block all
              cookies, allow specific ones, or alert you when cookies are being
              set or accessed.
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PolicySection };
