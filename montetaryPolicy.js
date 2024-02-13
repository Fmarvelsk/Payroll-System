const numberWithAlphabeth = [
  {
    text: "Bribes, in the form of financial or other advantages, may include:",
    outline: [
      "Money (whether in the form of cash or cash equivalent);",
      "Gifts;",
      "Hospitality and entertainment;",
      "Loans;",
      "Services;",
      "Preferential treatment",
      "Discounts; and",
      "Promises to provide financial or other advantages in the future",
    ],
  },
  {
    text: "For something to be considered a bribe and be subject to this policy:",
    outline: [
      "The timing of the bribe is irrelevant and any payments made, or advantages given, after a relevant event are considered bribes;",
      "The payment made, or advantage given, can be given or received unknowingly; and",
      "It is also not necessary for the bribed party to actually receive a benefit as a result of the bribe.",
    ],
  },
];

const numberOnly = [
  "Any worker of the Business, irrespective of seniority, tenure and working hours, including all employees, directors and officers, consultants and contractors, temporary and agency workers, trainees, casual and fixed-term staff, apprentices, interns and any volunteers (Staff);",
  "Anyone otherwise authorized to act on the behalf of Staff;",
  "The Business’ representatives and any other third parties who act on the Business’ behalf;",
  "The Business’ suppliers; and",
  "The Business’ clients or customers (e.g. a customer may attempt to induce someone working for the Business to give that customer more favorable treatment).",
];

const non_exhaustive_list = [
  "Hospitality valued at more than $500.",
  "Gifts, be they personal or corporate, with a value greater than $300.",
  "Any gifts that include cash or cash equivalents (including, but not limited to,  vouchers).",
  "Any hospitality or gifts given or received in secret.",
  "Any hospitality or gifts received in the name of an individual rather than the Business’ name.",
];

const staff_guidelines = [
  "Submit expense claims in accordance with the Business’ Expense Policy available from the HR Department; and",
  "Record in writing the reason for the expenditure.",
];

const report_list = [
  "Witness or otherwise discover anything corrupt or otherwise improper taking place;",
  "Are offered a bribe;",
  "Are asked to offer a bribe; or",
  "Suspect or discover that any bribery or corruption has taken place or may take place;",
];

export const antiBriberyPolicy = [
  {
    id: "statement-and-purpose-of-policy",
    header: "Statement and purpose of policy",
    list: [
      " As involvement in bribery and corruption exposes Dreambill Ltd (the Business) and its employees and representatives to a criminal offense; damages the Business’ reputation; and damages the confidence of any clients or customers, suppliers and business partners; the Business is committed to conducting its business in an honest and ethical manner.",
      "Bribery and corruption are criminal offenses in most countries where the Business conducts its business and operations. As a Nigerian-registered company (RC 7044379), the Business is subject to the Prevention and Combating of Corrupt Practices and other related Offences Act, 2000.",
      {
        text: " The Business has a zero-tolerance approach towards bribery and corruption anywhere in its business and is committed to:",
        number: [
          "Acting in a professional and fair manner",
          "acting with integrity in all its business dealings and relationships; and ",
          "implementing and enforcing effective systems to counter bribery and corruption.",
        ],
      },
    ],
  },

  {
    id: "what-does-this-policy-cover?",
    header: "What does this policy cover?",
    list: [
      "This policy covers bribery and corruption taking place anywhere in the Business (within Nigeria or abroad).",
      "This policy sets out the steps everyone in the Business must take to prevent bribery and corruption within the Business, in accordance with the relevant legislation and the Business’ requirements.",
      "This policy does not form part of any employment contract and the Business retains the right to amend it at any time, at its absolute discretion.",
    ],
  },

  {
    id: "what-are-bribery-and-corruption?",
    header: "What are bribery and corruption?",
    list: [
      {
        text: "A ‘bribe’ is any inducement or reward that is offered, promised, requested or provided in order to gain a commercial, contractual, regulatory or personal advantage. In most cases, a bribe will be a financial or other advantage given to a person in order for them to perform a relevant function or activity improperly, or to reward them for doing so.",
        isNested: true,
        number: numberWithAlphabeth,
      },
      "This policy sets out the steps everyone in the Business must take to prevent bribery and corruption within the Business, in accordance with the relevant legislation and the Business’ requirements.",
      " This policy does not form part of any employment contract and the Business retains the right to amend it at any time, at its absolute discretion.",
      {
        text: "‘Bribery’ includes:",
        number: [
          "Giving, offering or promising a bribe;",
          "Requesting, receiving or agreeing to receive a bribe; or",
          "Bribing a foreign public official (as defined in the Act).",
        ],
      },
      {
        text: "‘Corruption’ is the misuse of power or office for private gain.",
        number: [],
      },
      {
        text: "This means that no one should:",
        number: [
          "offer or provide a bribe (e.g. any payment, gift, hospitality or other benefit) to reward the business advantage received, or in the expectation that a business advantage will be received.",
          "accept a third party’s offer that they know or suspect to be made with the expectation that it will provide a business advantage (to the third party or anyone else).",
          "offer or provide a payment to a government official in any country (in Nigeria or abroad) to facilitate or speed up a necessary or routine procedure.",
          "fail to prevent bribery and corruption from occurring.",
        ],
      },
      {
        text: "No one must intimidate, threaten or retaliate against another person who has refused to accept or offer a bribe or who has raised concerns under this policy.",
        number: [],
      },
      {
        text: "For the purposes of this policy, it does not matter whether:",
        number: [
          "Bribery and corruption occur in Africa or abroad. Any act of bribery or corruption committed outside of the Nigeria may be prosecuted in the Nigeria; or",
          "The act of bribery and corruption is committed directly or indirectly.",
        ],
      },
    ],
  },

  {
    id:"who-can-be-involved-in-bribery-and-corruption?",
    header: "Who can be involved in bribery and corruption?",
    list: [
      {
        text: "Bribery and corruption can be committed by:",
        number: numberOnly,
      },
      "This policy and the rules contained within it apply to those listed in paragraph 13 above.",
    ],
  },

  {
    id: "bribery-and-corruption-occur",
    header: "In what circumstances can bribery and corruption occur?",
    list: [
      "Bribery and corruption can take place in the public and private sectors.",
      "Typically, the person receiving the bribe can influence the progress of or be aware of relevant business due to their position. The person receiving the bribe will often, but not always, be a government or public official.",
    ],
  },

  {
    id: "who-is-responsible-for-this-policy",
    header: "Who is responsible for this policy?",
    list: [
      "The Board of Directors has overall responsibility for this policy.",
      "The Compliance Team has been appointed as the person with primary and day-to-day operational responsibility for implementing this policy. They will also monitor the policy’s use and effectiveness and ensure that it is adhered to.",
      "Management personnel at all levels are responsible for ensuring those reporting to them are made aware of and understand this policy and are given adequate and regular training on it.",
    ],
  },

  {
    id: "gifts-and-hospitality",
    header: "Gifts and hospitality",
    list: [
      "All Staff are forbidden from soliciting any gifts or hospitality in the course of their work for the Business.",
      {
        text: "All Staff are forbidden from offering or receiving gifts or hospitality which are unduly lavish, extravagant or otherwise inappropriate from any person or organization which has had, has or may have influence over the Business’ business. The following is a non-exhaustive list of gifts and hospitality the Business deems inappropriate:",
        number: non_exhaustive_list,
      },
    ],
    note: (
      <div>
        If you have any questions about gifts and hospitality, contact the
        Compliance Team at{" "}
        <a
          style={{
            color: "blue",
          }}
          className="hover:underline"
          href="mailto:info@dreambill.io."
        >
          info@dreambill.io.
        </a>
      </div>
    ),
  },

  {
    id: "keeping-records",
    header: "Keeping records",
    list: [
      "As transparency is crucial and false or misleading records could be damaging to the Business, it is essential that the Business keeps a full and accurate record of all financial dealings. Under relevant money laundering regulations, the Business’ accountants and lawyers are required to report anything that seems irregular.",

      {
        text: "As a result, Staff must declare and properly record in writing all hospitality and gifts received or given. In relation to any hospitality, gifts or payments to third parties (including suppliers and customers), Staff must:",
        number: staff_guidelines,
      },
      "All accounts, invoices, purchase orders, credit notes and other records relating to third parties must be accurately and fully prepared in accordance with the Business’ procedures, practices and requirements.",
    ],
  },
  {
    id: "report-issue",
    header: "Reporting issues related to bribery and corruption",
    list: [
      {
        text: "All Staff have a responsibility to comply with this policy and prevent bribery and corruption. Staff who:",
        number: report_list,
      },
    ],
    note: "Must report this in accordance with the Business’ Whistleblowing Policy, available from the HR Department, as soon as possible. Staff can do this anonymously. As Staff must report issues related to bribery and corruption as soon as possible, any delays will need to be explained.",
  },
  {
    id: "consequences-of-non-compliance",
    header: "Consequences of non-compliance",
    list: [
      "The Business takes compliance with this policy very seriously and failure to comply with this policy puts both Staff and the Business at significant risk.",
      "Staff who fail to comply with this policy may commit a criminal offense and the criminal law relating to bribery and corruption carries several penalties.",
      "Due to the importance of this policy, failure to comply with any of its procedures and requirements may result in disciplinary action and/or dismissal for gross misconduct. Any non-Staff who breach this policy may have their contract terminated with immediate effect.",
      <div>
        If you have any questions or concerns about anything in this policy,
        please contact the Compliance Team at{" "}
        <a
          style={{
            color: "blue",
          }}
          className="hover:underline"
          href="mailto:info@dreambill.io."
        >
          info@dreambill.io.
        </a>
      </div>,
    ],
  },
];
