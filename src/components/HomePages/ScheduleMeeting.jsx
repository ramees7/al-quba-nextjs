"use client"
import dynamic from "next/dynamic"; // For dynamic imports
import { FaEnvelope, FaRegUser } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

// Dynamic import for PhoneInput to avoid SSR issues
const PhoneInput = dynamic(() => import("react-phone-input-2"), { ssr: false });
import "react-phone-input-2/lib/bootstrap.css";
import Select from "react-select";

export default function ScheduleMeeting() {
  // Custom styles for the dropdown
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#EFF0F2",
      height: "50px",
      display: "flex",
      alignItems: "center",
      padding: "0px 8px",
      color: "#898989",
      borderRadius: "none",
      border: "0",
      boxShadow: state.isFocused ? "none" : "none",
      "&:hover": {
        border: "0",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#898989",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#898989",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "#898989",
      transform: state.selectProps.menuIsOpen
        ? "rotate(180deg)"
        : "rotate(0deg)",
      transition: "transform 0.2s ease",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#FFFFFF",
      borderRadius: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      color: "#898989",
      backgroundColor: state.isFocused ? "#EFF0F2" : "#FFFFFF",
    }),
  };

  // Dropdown options
  const budgetOptions = [
    { value: "500000", label: "500,000 AED" },
    { value: "1000000", label: "1,000,000 AED" },
    { value: "2000000", label: "2,000,000 AED" },
  ];

  const assistanceOptions = [
    { value: "buy", label: "Help with Buying" },
    { value: "sell", label: "Help with Selling" },
    { value: "advice", label: "Need Advice" },
  ];

  const investmentPlanOptions = [
    { value: "immediate", label: "Immediate Investment" },
    { value: "three_months", label: "In 3 Months" },
    { value: "six_months", label: "In 6 Months" },
  ];

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      budget: null, // Use null for select fields
      assistance: null,
      investmentPlan: null,
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      budget: Yup.object().nullable().required("Budget is required"), // Allow null for select
      assistance: Yup.object().nullable().required("Assistance is required"),
      investmentPlan: Yup.object()
        .nullable()
        .required("Investment Plan is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10,}$/, "Phone number must contain at least 10 digits")
        .required("Phone number is required"),
    }),
    onSubmit: async (values) => {
      console.log(values);

      try {
        const response = await axios.post("/api/schedule-meeting", values);
        alert("Meeting scheduled successfully!");
      } catch (error) {
        console.error(error);
        alert("Failed to schedule the meeting. Please try again.");
      }
    },
  });

  return (
    <div className="relative grid md:grid-cols-7 lg:gap-16 md:gap-6 gap-12 md:px-0 px-8 lg:py-20 py-10 h-screen md:min-h-[600px] min-h-fit tall:h-[700px]">
      {/* <div className="relative grid md:grid-cols-7 lg:gap-16 md:gap-6 gap-12 px-[40px] md:px-0 lg:py-20 py-10 h-screen  md:min-h-[600px] min-h-fit"> */}
      <div className="relative md:col-span-4 h-full flex items-center">
        <div className="md:absolute xl:left-[160px] md:left-[60px] left-[40px] xl:max-w-[500px] lg:max-w-[400px] md:max-w-[300px] h-full flex items-center lg:me-4 xl:me-0">
          <div>
            <h1 className="lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-extralightFont md:mb-2 mb-1">
              Forge Your Financial Empire.
            </h1>
            <h1 className="lg:text-4xl md:text-3xl sm:text-3xl xs:text-2xl font-medium ">
              Al Quba, Dubai’s Pinnacle <br /> Investment Partner.
            </h1>
            <h1 className="lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-extralightFont lg:my-8 md:my-5 sm:my-5 xs:my-3">
              Dream Big With Us!
            </h1>
            <p className="text-[#898989] font-normalFont sm:text-sm xs:text-text-xs md:text-sm lg:text-base">
              Command your financial destiny with AL QUBA. As Dubai’s foremost
              investment powerhouse, we promise abundant opportunities to build
              a life of premium success.
            </p>
            <button className="md:mt-10 sm:mt-5 xs:mt-3  border font-capsMedium border-[#0F2041] md:text-base sm:text-sm xs:text-xs rounded-3xl uppercase lg:px-7 md:px-4 sm:px-4 xs:px-2 py-1">
              know more
            </button>
          </div>
        </div>
      </div>
      <div className="relative md:col-span-3 h-full flex items-center">
        <div className="md:absolute lg:right-20 md:right-10 xl:w-[550px] lg:w-[450px] md:w-[400px] w-full h-full">
          <h2 className="md:text-2xl sm:text-xl xs:text-lg mb-4 font-extralightFont">
            Schedule a meeting to know more
          </h2>
          <form
            onSubmit={formik.handleSubmit}
            className="space-y-4 font-normalFont"
          >
            {/* Name Field */}
            <div className="flex items-center w-full px-4 h-[50px] bg-[#EFF0F2] ">
              <input
                type="text"
                placeholder="Your name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="flex-1 text-[#898989] bg-transparent outline-none "
              />
              <FaRegUser className="text-black ml-2 text-xl" />
            </div>
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm">{formik.errors.name}</p>
            )}

            {/* Phone Number Field */}
            {/* <PhoneInput
              country={"ae"}
              enableSearch={true}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputClass="!outline-none !w-full !text-[#898989] !h-[50px] !bg-[#EFF0F2] !border-none !rounded-none !px-4"
              buttonClass="!bg-transparent !border-none !h-[50px] !bg-[#EFF0F2]"
              containerClass="w-full flex justify-end"
              dropdownClass="custom-dropdown right-0"
            /> */}

            <PhoneInput
              country={"ae"}
              enableSearch={true}
              value={formik.values.phone}
              onChange={(value) => formik.setFieldValue("phone", value)}
              onBlur={() => formik.setFieldTouched("phone", true)}
              inputClass="!outline-none !w-full !text-[#898989] !h-[50px] !bg-[#EFF0F2] !border-none !rounded-none !px-4"
              buttonClass="!bg-transparent !border-none !h-[50px] !bg-[#EFF0F2]"
              containerClass="w-full flex justify-end"
              dropdownClass="custom-dropdown right-0"
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500 text-sm">{formik.errors.phone}</p>
            )}

            {/* Email Field */}
            <div className="flex items-center w-full px-4 h-[50px] bg-[#EFF0F2] ">
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="flex-1 text-[#898989] bg-transparent outline-none"
              />
              <FaEnvelope className="text-black ml-2 text-xl" />
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}

            {/* Dropdown Fields */}
            {[
              { name: "budget", options: budgetOptions, placeholder: "Budget" },
              {
                name: "assistance",
                options: assistanceOptions,
                placeholder: "How Can We Assist You?",
              },
              {
                name: "investmentPlan",
                options: investmentPlanOptions,
                placeholder: "Investment Plan",
              },
            ].map(({ name, options, placeholder }) => (
              <div className="w-full" key={name}>
                <Select
                  name={name}
                  instanceId={`${name}-select`}
                  options={options}
                  placeholder={placeholder}
                  styles={customStyles}
                  value={formik.values[name]}
                  onChange={(selectedOption) =>
                    formik.setFieldValue(name, selectedOption)
                  }
                  onBlur={formik.handleBlur}
                />
                {formik.touched[name] && formik.errors[name] && (
                  <p className="text-red-500 text-sm">{formik.errors[name]}</p>
                )}
              </div>
            ))}

            
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[50px] text-white bg-[#0E2141] font-medium uppercase"
            >
              INVEST TODAY
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
{/* <div className="w-full mb-4">
              <select
                name="budget"
                value={formik.values.budget?.value || ""}
                onChange={(e) =>
                  formik.setFieldValue("budget", {
                    value: e.target.value,
                    label: e.target.options[e.target.selectedIndex].text,
                  })
                }
                onBlur={formik.handleBlur}
                className="w-full px-3 h-[50px] bg-[#EFF0F2]  text-[#898989] border-none rounded-none focus:ring-0"
              >
                <option value="">Select Budget</option>
                {budgetOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {formik.touched.budget && formik.errors.budget && (
                <p className="text-red-500 text-sm">{formik.errors.budget}</p>
              )}
            </div>

            <div className="w-full mb-4">
              <select
                name="assistance"
                value={formik.values.assistance?.value || ""}
                onChange={(e) =>
                  formik.setFieldValue("assistance", {
                    value: e.target.value,
                    label: e.target.options[e.target.selectedIndex].text,
                  })
                }
                onBlur={formik.handleBlur}
                className="w-full px-3 h-[50px] bg-[#EFF0F2] text-[#898989] border-none rounded-none focus:ring-0"
              >
                <option value="">Select Assistance</option>
                {assistanceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {formik.touched.assistance && formik.errors.assistance && (
                <p className="text-red-500 text-sm">
                  {formik.errors.assistance}
                </p>
              )}
            </div>

            <div className="w-full mb-4">
              <select
                name="investmentPlan"
                value={formik.values.investmentPlan?.value || ""}
                onChange={(e) =>
                  formik.setFieldValue("investmentPlan", {
                    value: e.target.value,
                    label: e.target.options[e.target.selectedIndex].text,
                  })
                }
                onBlur={formik.handleBlur}
                className="w-full px-3 h-[50px] bg-[#EFF0F2] text-[#898989] border-none rounded-none focus:ring-0"
              >
                <option value="">Select Investment Plan</option>
                {investmentPlanOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {formik.touched.investmentPlan &&
                formik.errors.investmentPlan && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.investmentPlan}
                  </p>
                )}
            </div> */}
