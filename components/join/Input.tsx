import { ErrorMessage, Field } from "formik";

const Input = (props: {
  name: string;
  label: string;
  type?: string;
  as?: string;
  className?: string;
}) => {
  const { name, label, type, as, className } = props;

  return (
    <div className={`flex flex-col gap-y-2 ${className}`}>
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <Field className="input" id={name} name={name} type={type} as={as} />
      <ErrorMessage name={name}>
        {(msg) => <p className="text-sm text-brand">{msg}</p>}
      </ErrorMessage>
    </div>
  );
};

export default Input;
