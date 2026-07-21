import React, { useState } from "react";
import "./Contact.css";
import { toast } from "react-toastify";
import { submitContactForm } from "../../service/contactService";

const Contact = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const onChangeHandler = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await submitContactForm(data);
      toast.success("Message sent successfully!");
      setData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form p-5 shadow-sm bg-white">
              <h2 className="text-center mb-4">Get in Touch</h2>
              <form onSubmit={onSubmitHandler}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control custom-input" placeholder="First Name" name="firstName" value={data.firstName} onChange={onChangeHandler} required />
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control custom-input" placeholder="Last Name" name="lastName" value={data.lastName} onChange={onChangeHandler} required />
                  </div>
                  <div className="col-12">
                    <input type="email" className="form-control custom-input" placeholder="Email Address" name="email" value={data.email} onChange={onChangeHandler} required />
                  </div>
                  <div className="col-12">
                    <textarea className="form-control custom-input" rows="5" placeholder="Your Message" name="message" value={data.message} onChange={onChangeHandler} required></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;