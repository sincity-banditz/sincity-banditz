import axios from "axios";
import { Form, Formik } from "formik";
import {
  joinInitialValues,
  joinValidationSchema,
} from "../../helpers/constants";
import Input from "./Input";
import Spinner from "./Spinner";

const Join = () => {
  return (
    <section id="join" className="py-16 bg-neutral-800">
      <div className="container">
        <h2 className="title">Want to be member?</h2>
        <p className="text-neutral-200">
          Lorem Ipsum has been the industrys standard dummy text ever since the
          1500s.
        </p>
        <div className="flex gap-4 mt-4">
          <Formik
            initialValues={joinInitialValues}
            validationSchema={joinValidationSchema}
            onSubmit={async (values) => axios.post("/email", values)}
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
                  disabled={isSubmitting}
                >
                  {!isSubmitting && "Send Request"}
                  {isSubmitting && <Spinner />}
                </button>
              </Form>
            )}
          </Formik>
          <div>hello</div>
        </div>
      </div>
    </section>
  );
};

export default Join;
