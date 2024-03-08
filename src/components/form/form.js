"use client";

import { useRef } from "react";
import { useFormState } from "react-dom";
import { sendMail } from "./action";
import { useEffect } from "react";

const initialState = {
  message: null,
  success: null,
};

const Form = () => {
  const ref = useRef(null);
  const [state, formAction] = useFormState(sendMail, initialState);

  useEffect(() => {
    if (state.success && ref.current) {
      ref.current.reset();
    }
  }, [state, state.success]);

  return (
    <form ref={ref} action={formAction} className="regular">
      <div>
        <p className="helper">Անուն Ազգանուն</p>
        <input
          id="name"
          name="name"
          className="input"
          placeholder="Անուն Ազգանուն"
        />
      </div>
      <p className="helper">Կկարողանաք ներկա գտնվել մեր հարսանիքին</p>
      <ul>
        <li>
          <input
            className="radio"
            type="radio"
            id="yes"
            name="reason"
            value="yes"
          />
          <label className="radio_info" htmlFor="yes">
            Իհարկե կգամ
          </label>
        </li>
        <li>
          <input
            className="radio"
            type="radio"
            id="double"
            name="reason"
            value="double"
          />
          <label className="radio_info" htmlFor="double">
            Կգանք երկուսով
          </label>
        </li>
        <li>
          <input
            className="radio"
            type="radio"
            id="no"
            name="reason"
            value="no"
          />
          <label className="radio_info" htmlFor="no">
            Ցավոք, չեմ կարողանա
          </label>
        </li>
        <li>
          <input
            className="radio"
            type="radio"
            id="later"
            name="reason"
            value="later"
          />
          <label className="radio_info" htmlFor="later">
            Կտեղեկացնեմ ավելի ուշ
          </label>
        </li>
      </ul>

      <button data-aos="zoom-in" className="submit" type="submit">
        Ուղարկել
      </button>
    </form>
  );
};

export default Form;
