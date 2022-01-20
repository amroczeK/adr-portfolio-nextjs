export const TextInput = ({
  title = "",
  required = false,
  optional = false,
  formRegister,
  error = null,
}) => (
  <>
    <label
      htmlFor={title}
      className="block text-sm font-medium text-alternative-dark"
    >
      {title}
    </label>
    <input
      type="text"
      name={title.toLowerCase()}
      id={title.toLowerCase()}
      className="mt-1 focus:ring-alternative-dark focus:border-alternative-dark block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      {...formRegister}
    />
    {required && !error && (
      <p className="mt-2 text-xs text-alternative-light">Required</p>
    )}
    {optional && !error && (
      <p className="mt-2 text-xs text-alternative-light">Optional</p>
    )}
    {required && error && (
      <p className="mt-2 text-xs text-red-500">This field is required</p>
    )}
  </>
);

export const FirstName = ({
  fieldName = "first-name",
  required = false,
  optional = false,
  formRegister,
  error = null,
}) => (
  <>
    <label
      htmlFor={fieldName}
      className="block text-sm font-medium text-alternative-dark"
    >
      First Name
    </label>
    <input
      type="text"
      name={fieldName}
      id={fieldName}
      autoComplete="given-name"
      className="mt-1 focus:ring-alternative-dark focus:border-alternative-dark block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      {...formRegister}
    />
    {required && !error && (
      <p className="mt-2 text-xs text-alternative-light">Required</p>
    )}
    {optional && !error && (
      <p className="mt-2 text-xs text-alternative-light">Optional</p>
    )}
    {required && error && (
      <p className="mt-2 text-xs text-red-500">This field is required</p>
    )}
  </>
);

export const LastName = ({
  fieldName = "last-name",
  required = false,
  optional = false,
  formRegister,
  error = null,
}) => (
  <>
    <label
      htmlFor={fieldName}
      className="block text-sm font-medium text-alternative-dark"
    >
      Last Name
    </label>
    <input
      type="text"
      name={fieldName}
      id={fieldName}
      autoComplete="family-name"
      className="mt-1 focus:ring-alternative-dark focus:border-alternative-dark block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      {...formRegister}
    />
    {required && !error && (
      <p className="mt-2 text-xs text-alternative-light">Required</p>
    )}
    {optional && !error && (
      <p className="mt-2 text-xs text-alternative-light">Optional</p>
    )}
    {required && error && (
      <p className="mt-2 text-xs text-red-500">This field is required</p>
    )}
  </>
);

export const OrganisationName = ({
  fieldName = "organisation-name",
  required = false,
  optional = false,
  formRegister,
  error = null,
}) => (
  <>
    <label
      htmlFor={fieldName}
      className="block text-sm font-medium text-alternative-dark"
    >
      Company or Organisation Name
    </label>
    <input
      type="text"
      name={fieldName}
      id={fieldName}
      autoComplete="organization"
      className="mt-1 focus:ring-alternative-dark focus:border-alternative-dark block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      {...formRegister}
    />
    {required && !error && (
      <p className="mt-2 text-xs text-alternative-light">Required</p>
    )}
    {optional && !error && (
      <p className="mt-2 text-xs text-alternative-light">Optional</p>
    )}
    {required && error && (
      <p className="mt-2 text-xs text-red-500">This field is required</p>
    )}
  </>
);

export const EmailAddress = ({
  fieldName = "email-address",
  required = false,
  optional = false,
  formRegister,
  error = null,
}) => (
  <>
    <label
      htmlFor={fieldName}
      className="block text-sm font-medium text-alternative-dark"
    >
      Email Address
    </label>
    <input
      type="text"
      name={fieldName}
      id={fieldName}
      autoComplete="email"
      className="mt-1 focus:ring-alternative-dark focus:border-alternative-dark block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      {...formRegister}
    />
    {required && !error && (
      <p className="mt-2 text-xs text-alternative-light">Required</p>
    )}
    {optional && !error && (
      <p className="mt-2 text-xs text-alternative-light">Optional</p>
    )}
    {required && error && (
      <p className="mt-2 text-xs text-red-500">This field is required</p>
    )}
  </>
);

export const PhoneNumber = ({
  fieldName = "phone-number",
  required = false,
  optional = false,
  formRegister,
  error = null,
}) => (
  <>
    <label
      htmlFor={fieldName}
      className="block text-sm font-medium text-alternative-dark"
    >
      Phone Number
    </label>
    <input
      type="text"
      name={fieldName}
      id={fieldName}
      autoComplete="tel"
      className="mt-1 focus:ring-alternative-dark focus:border-alternative-dark block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      {...formRegister}
    />
    {required && !error && (
      <p className="mt-2 text-xs text-alternative-light">Required</p>
    )}
    {optional && !error && (
      <p className="mt-2 text-xs text-alternative-light">Optional</p>
    )}
    {required && error && (
      <p className="mt-2 text-xs text-red-500">This field is required</p>
    )}
  </>
);

export const AdditionalInformation = ({ formRegister }) => (
  <>
    <label
      htmlFor="questions"
      className="block text-sm font-medium text-alternative-dark"
    >
      Questions or Additional Information
    </label>
    <div className="mt-1">
      <textarea
        id="questions"
        name="questions"
        rows={3}
        className="shadow-sm focus:ring-alternative-dark focus:border-alternative-dark mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
        placeholder="Ask me anything!"
        defaultValue={""}
        {...formRegister}
      />
    </div>
  </>
);


export const SubmitButton = ({ disabled }) => (
  <>
    <button
      disabled={disabled}
      type="submit"
      className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-primary-dark ${
        disabled ? "bg-primary-light/50" : "bg-secondary-light"
      } ${
        !disabled && "hover:bg-alternative-light"
      } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-alternative-dark`}
    >
      {disabled && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-secondary-dark"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      Submit
    </button>
  </>
);
