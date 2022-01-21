import { useState } from "react";
import {
  FirstName,
  LastName,
  OrganisationName,
  EmailAddress,
  PhoneNumber,
  AdditionalInformation,
  SubmitButton,
  TextInput,
} from "./FormInputs";
import { ErrorPopup, SuccessPopup } from "../Alerts";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit function which will invoke after successful validation
  const onSubmit = async (data) => {
    let { firstName, lastName, ...rest } = data;

    let formattedData = rest;
    formattedData.fullName = `${firstName} ${lastName}`;

    try {
      setLoading(true);
      const response = await fetch("/api/forms/contact", {
        method: "POST",
        body: JSON.stringify({ ...formattedData }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response?.ok) {
        throw response?.statusText;
      }
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess((success) => !success);
      }, 2000);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
      setTimeout(() => {
        setError((error) => !error);
      }, 2000);
    }

    // try {
    //   setLoading(true);
    //   const response = await fetch("/api/sendgrid/email", {
    //     method: "POST",
    //     body: JSON.stringify({ ...formattedData }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   if (!response?.ok) {
    //     throw response?.statusText;
    //   }
    // } catch (error) {
    //   console.log(error);
    //   setLoading(false);
    //   setError(true);
    //   setTimeout(() => {
    //     setError((error) => !error);
    //   }, 2000);
    // }
  };

  return (
    <>
      <div className="md:grid md:grid-cols-2 md:gap-6 text-left xl:w-1/2">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <TextInput
                      title="Subject"
                      required
                      formRegister={register("subject", {
                        required: true,
                      })}
                      error={errors.subject}
                    />
                  </div>

                  <div className="col-span-6 md:col-span-3">
                    <FirstName
                      required
                      formRegister={register("firstName", { required: true })}
                      error={errors.firstName}
                    />
                  </div>

                  <div className="col-span-6 md:col-span-3">
                    <LastName
                      required
                      formRegister={register("lastName", { required: true })}
                      error={errors.lastName}
                    />
                  </div>

                  <div className="col-span-6 md:col-span-3 ">
                    <EmailAddress
                      required
                      formRegister={register("emailAddress", {
                        required: true,
                      })}
                      error={errors.emailAddress}
                    />
                  </div>

                  <div className="col-span-6 md:col-span-3">
                    <PhoneNumber
                      optional
                      formRegister={register("phoneNumber", { required: true })}
                      error={errors.phoneNumber}
                    />
                  </div>

                  <div className="col-span-6 lg:col-span-3">
                    <OrganisationName
                      optional
                      formRegister={register("organisationName", {
                        required: false,
                      })}
                      error={errors.organisationName}
                    />
                  </div>

                  <div className="col-span-6">
                    <AdditionalInformation
                      formRegister={register("questions")}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row px-4 py-3 sm:px-6 gap-3 justify-end">
                {success && !loading && !error && (
                  <SuccessPopup
                    message={"Request submission was successful."}
                  />
                )}
                {error && (
                  <ErrorPopup
                    message={"Request submission was unsuccessful."}
                  />
                )}
                <div className="text-right flex items-center justify-end">
                  <SubmitButton disabled={loading} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
