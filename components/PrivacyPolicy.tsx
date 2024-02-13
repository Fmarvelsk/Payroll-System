import { privacy_list } from "../privacy";

export const privacyPolicy = () => {
  return (
    <div>
      <section className="terms mt-5">
        <p>
          DreamBill (“us”, “we”, or “our”) operates the{" "}
          <a
            style={{
              color: "blue",
            }}
            href="https://dreambill.io/terms"
          >
            https://dreambill.io/terms
          </a>{" "}
          website(the “Service”). This page describes our policies regarding the
          collection, use and disclosure of Personal Information when you use
          our Service. DreamBill comprises a number of legal entities
          incorporated in different countries which we use as infrastructure to
          provide our Services. However, for data protection purposes the
          entities in control of all Personal Data processed in connection with
          our Website and Services are
        </p>

        <p>
          This Privacy Policy applies to the Users of the Website, including
          Customers, Employers, Contractors, Employees, Freelancers, Students,
          and also all visitors of Dreambill.io with whom DreamBill does not
          have a contractual relationship. We use your Personal Information for
          providing and improving the Service. By using the Service, you agree
          to the collection and use of information in accordance with this
          policy. Unless otherwise defined in this Privacy Policy, terms used in
          this Privacy Policy have the same meanings as in our Terms and
          Conditions, accessible at{" "}
          <a
            style={{
              color: "blue",
            }}
            href="https://dreambill.io/terms"
          >
            https://dreambill.io/terms
          </a>
        </p>

        <ol className="list-decimal marker:font-bold marker:text-[#090628]">
          {privacy_list.map((list, i) => (
            <li key={i} id={list.id} className="my-5">
              <div>
                <span className="text-[#090628] font-bold mb-5 font-inter">
                  {list.header}:{" "}
                </span>
                {list.content}

                <ul className="list-disc ml-10 marker:font-noraml marker:text-[#667085] marker:text-medium">
                  {list?.list?.map((content, i) => (
                    <li key={i}>{content}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};
