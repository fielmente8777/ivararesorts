"use client";
import LazyLoadedMap from "@/components/map/LazyLoadedMap";
import { Container, Section } from "@/components/sectionComponants";
import useBookingForm from "@/hooks/useBookingForm";
import { Loader2, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { contact, countries } from "@/utils/constent";
import { FromDropDown } from "@/utils/icons";

interface ContactSectionProps {
  contactInfo: {
    title: string;
    address: string;
    email: string;
    phone: string;
    mapEmbedUrl: string;
  };
}

const ContactSection = ({ contactInfo }: ContactSectionProps) => {
  const {
    isSubmitting,
    errors,
    handleSubmit,
    formData,
    handleChange,
    setFieldValue,
  } = useBookingForm({
    includeMessage: true,
    onSubmitSuccess: () => {},
  });

  const enquiryForm = {
    subtitle: "ENQUIRE NOW",
    title: "Let's Plan your Stay at <i class='text-p22'>The Rudraksh</i>",
    buttonText: "GET A CALL BACK ",
    fields: [
      {
        name: "name",
        placeholder: "Full Name*",
        type: "text",
        value: formData.name,
        onChange: handleChange,
      },
      {
        name: "phone",
        placeholder: "Phone Number*",
        type: "tel",
        value: formData.phone,
        onChange: handleChange,
      },
      {
        name: "email",
        placeholder: "Email Address",
        type: "email",
        value: formData.email,
        onChange: handleChange,
      },
      {
        name: "city",
        placeholder: "City",
        type: "text",
        value: formData.city,
        onChange: handleChange,
      },
      {
        name: "message",
        placeholder: "Tell us something about your enquiry!",
        type: "textarea",
        value: formData.message,
        onChange: handleChange,
      },
    ],
  };

  return (
    <Section className="bg-primary/30">
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-start">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl mb-8 font-primary">
              Contact <i className="text-p22">Details!</i>
            </h2>

            <div className="space-y-6 text-lg">
              <div className="flex gap-2">
                <span>
                  <MapPin size={20} className="mt-1" />
                </span>
                <Link href={contact.addressLink} className="text-wrap">
                  {contactInfo.address}
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={20} className="" />

                <Link href={contactInfo.email}>
                  info@therudrakshretreat.com
                </Link>
              </div>

              <div className="flex items-center gap-2 font-body">
                <Phone size={20} className="" />

                <Link href={contactInfo.phone}>+91 8826652343</Link>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded lg:aspect-4/2.25 aspect-video">
              <LazyLoadedMap src={contactInfo.mapEmbedUrl} />
            </div>
          </div>

          {/* Right Side */}
          <div className="border border-primary/40 bg-primary/10 rounded-2xl lg:p-6 p-4 max-w-xl w-full ml-auto">
            <p className="uppercase tracking-[3px] text-[#C68642] flex items-center gap-2">
             {enquiryForm.subtitle}
            </p>

            <h3
              className="text-3xl mt-2 mb-8 font-primary"
              dangerouslySetInnerHTML={{ __html: enquiryForm.title }}
            ></h3>

            <form className="space-y-3" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Full Name*"
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone Field with Country Code */}
              <div>
                <div className="flex gap-2">
                  <div className="relative w-[110px]">
                    <select
                      className="w-full rounded-md font-body border border-gray-300 bg-white px-3 py-3 outline-none appearance-none cursor-pointer pr-8"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={(e) =>
                        setFieldValue("countryCode", e.target.value)
                      }
                      aria-label="Country Code"
                    >
                      {countries.map((country, index) => (
                        <option key={index} value={country.code}>
                          {country.code}
                        </option>
                      ))}
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <FromDropDown />
                    </span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    placeholder="Phone Number*"
                    onChange={handleChange}
                    className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-3 outline-none"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email Address"
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* City Field */}
              <div>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  placeholder="City"
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none"
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  placeholder="Tell us something about your enquiry!"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C8A25A] text-secondary px-4 py-4 rounded-md uppercase flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    {enquiryForm.buttonText} <Foo />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactSection;

export const Foo = () => (
  <svg
    width={11}
    height={12}
    viewBox="0 0 11 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.7695 0.634703C11.0763 0.947119 11.0763 1.45365 10.7695 1.76607L1.86473 10.8327C1.5579 11.1451 1.06041 11.1451 0.753565 10.8327C0.446728 10.5203 0.446728 10.0138 0.753565 9.70143L9.65838 0.634703C9.9652 0.322287 10.4626 0.322287 10.7695 0.634703Z"
      fill="#352418"
    />
    <path
      d="M0 1.20039C0 0.758567 0.35178 0.400391 0.785714 0.400391H10.2143C10.6482 0.400391 11 0.758567 11 1.20039V10.8004C11 11.2422 10.6482 11.6004 10.2143 11.6004C9.78034 11.6004 9.42857 11.2422 9.42857 10.8004V2.00039H0.785714C0.35178 2.00039 0 1.64221 0 1.20039Z"
      fill="#352418"
    />
  </svg>
);
