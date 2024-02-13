import {
  definition,
  acceptance_of_service,
  term_list,
  change_of_terms,
} from "../servicePolicy";

const DiamondDot = ({ service }: any) => {
  return (
    <li>
      {service.text}
      <ul className="ml-10 list-[square] marker:font-noraml marker:text-[#667085] marker:text-medium">
        {service.outline.map((section: any, i: any) => (
          <li key={i}>{section}</li>
        ))}{" "}
      </ul>
    </li>
  );
};

export const termsOfService = () => {
  return (
    <div>
      <section className="terms mt-5">
        <p>
          Please read these Terms of Service (&quot;Terms&quot;), which set
          forth the legally binding terms and conditions between you and
          DreamBill Limited - DreamBill (‘DreamBill’ or ‘we’, ‘our’ or ‘us’). It
          governs your access to and the use of DreamBill’s website, mobile
          application and the services provided by DreamBill.{" "}
        </p>

        <p>
          Our collection and use of your personal information in connection with
          your use of our services are described in our Privacy Policy.
        </p>
        <p>
          Your access to use our services is conditioned on your acceptance of
          and compliance with these Terms. These Terms apply to all visitors,
          business owners, and any other person who accesses or uses our
          services.
        </p>
        <p>
          Our website is not directed at you if we are prohibited by any law of
          any jurisdiction from making the information on our website available
          to you and is not intended for any use that would be contrary to your
          local law or regulation.
        </p>
        <p>
          By accessing or using our services, you agree to be bound by these
          Terms. If you disagree with any part of the terms then, you may not
          access our services.
        </p>

        <ol className="list-decimal marker:font-bold marker:text-[#090628] marker:text-2xl">
          <li>
            <h3
              id="definitions"
              className="text-[#090628] font-bold text-2xl mb-5 font-inter"
            >
              Definitions
            </h3>
            <p className="mb-2">In these Terms,</p>
            {definition.map((item, i) => (
              <div key={i} className="mb-5">
                <b className="text-[#090628]">&quot;{item.title}&quot; </b>
                {item.meaning}
              </div>
            ))}
          </li>

          <li>
            <h3
              id="acceptance-terms"
              className="text-[#090628] font-bold text-2xl mb-5 font-inter"
            >
              Acceptance of Terms
            </h3>

            {acceptance_of_service.map((policy, i) => (
              <div key={i} className="mb-5">
                {policy}
              </div>
            ))}
          </li>

          {term_list.map((service, i) => (
            <li key={i} className="my-5">
              <h3
                id={service.id}
                className="text-[#090628] font-bold text-2xl mb-5 font-inter"
              >
                {service.header}
              </h3>
              {service?.content && <div>{service.content}</div>}
              {service.listInfo && (
                <div className="mt-5">{service.listInfo}</div>
              )}
              <ul className="list-disc ml-10 marker:font-noraml marker:text-[#667085] marker:text-medium">
                {service.list.map((list: any, i) =>
                  list?.text ? (
                    <DiamondDot service={list} />
                  ) : (
                    <li key={i}>{list}</li>
                  )
                )}
              </ul>
            </li>
          ))}

          <li>
            <h3
              id="change-to-terms"
              className="text-[#090628] font-bold text-2xl mb-5 font-inter"
            >
              Changes to Terms
            </h3>

            {change_of_terms.map((policy, i) => (
              <div key={i} className="mb-5">
                {policy}
              </div>
            ))}
          </li>

          <li>
            <h3
              id="contact-us"
              className="text-[#090628] font-bold text-2xl mb-5 font-inter"
            >
              Contact Us{" "}
            </h3>
            <div>
              If you have any questions about these Terms, please contact us at
              <a
                style={{
                  color: "blue",
                }}
                className="hover:underline"
                href="mailto:info@dreambill.io."
              >
                info@dreambill.io.
              </a>
              This document was last updated in June 13th 2023
            </div>
          </li>
        </ol>
      </section>
    </div>
  );
};
