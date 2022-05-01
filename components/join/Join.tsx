import { useState } from "react";
import axios from "axios";
import { Form, Formik } from "formik";
import {
  points,
  joinInitialValues,
  joinValidationSchema,
} from "helpers/constants";
import Input from "components/join/Input";
import Spinner from "components/join/Spinner";

const Join = () => {
  const [isSent, setIsSent] = useState(false);

  return (
    <section id="join" className="py-16 bg-neutral-800">
      <div className="container">
        <h2 className="title">Want to be member?</h2>
        <p className="text-neutral-200">
          Lorem Ipsum has been the industrys standard dummy text ever since the
          1500s.
        </p>
        <div className="flex flex-col-reverse md:flex-row gap-8 mt-8">
          <Formik
            initialValues={joinInitialValues}
            validationSchema={joinValidationSchema}
            onSubmit={async (values) => {
              await axios.post("/email", values).then(() => setIsSent(true));
            }}
          >
            {({ isSubmitting }) => (
              <Form className="grid grid-cols-2 gap-4 w-full md:w-1/2">
                <Input name="username" label="Username" />
                <Input name="age" label="Age" type="number" />
                <Input
                  className="col-span-full"
                  name="email"
                  label="Email"
                  type="email"
                />
                <Input
                  className="col-span-full"
                  name="experience"
                  label="Experience"
                  as="textarea"
                />
                <button
                  className="btn-brand py-4"
                  type="submit"
                  disabled={isSubmitting || isSent}
                >
                  {!isSubmitting && (isSent ? "Request Sent" : "Send Request")}
                  {isSubmitting && <Spinner />}
                </button>
              </Form>
            )}
          </Formik>
          <ul className="flex flex-col gap-y-8 w-full md:w-1/2">
            {points.map((point) => (
              <li key={point.text} className="flex items-center gap-x-4">
                <div className="p-2 rounded-full bg-brand">
                  <point.Icon className="w-8 h-8" />
                </div>
                <p className="font-medium">{point.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Join;
