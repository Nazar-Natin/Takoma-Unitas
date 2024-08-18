import emailjs from "emailjs-com";

export const sendEmail = (formData) => {
  return emailjs.send(
    "service_5ejhsj8",
    "template_7qsxg17",
    formData,
    "Kgf6m4x6-W4BdG_fD"
  );
};
