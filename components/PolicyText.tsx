const NumberList = ({ number }: any) => {
  return (
    <ul className="ml-10 mt-2 list-disc">
      {number.map((digit: any, i: any) => (
        <li key={i}>{digit}</li>
      ))}
    </ul>
  );
};

export const AlphaNumeric = ({ number }: any) => {
  return (
    <ul className="ml-10 mt-2 list-[upper-roman]">
      {number.map((digit: any, i: any) => (
        <li key={i}>
          {digit.text}

          <ul className="ml-10 mt-2 list-disc">
            {digit?.outline?.map((outline: any, i: any) => (
              <li key={i}>{outline}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export const policyText = ({ policy }: any) => {
  return (
    <div className="mt-5 mb-14">
      <h4
        id={policy.id}
        className="text-[#090628] font-bold text-2xl mb-5 font-inter"
      >
        {policy.header}
      </h4>
      <ol>
        {policy.list.map((list: any, i: any) =>
          list?.text ? (
            <>
              <li key={i} className="list-decimal font-poppins mb-5">
                {list.text}
                {list.isNested ? (
                  <AlphaNumeric number={list.number} />
                ) : (
                  <NumberList number={list.number} />
                )}
              </li>
            </>
          ) : (
            <li key={i} className="list-decimal font-poppins mb-5">
              {list}
            </li>
          )
        )}
      </ol>

      {policy?.note}
    </div>
  );
};
