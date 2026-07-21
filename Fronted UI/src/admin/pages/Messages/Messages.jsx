import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchAllMessages } from "../../services/contactService";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const data = await fetchAllMessages();
      setMessages(data);
    } catch (error) {
      toast.error("Unable to load messages.");
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="py-5 row justify-content-center">
      <div className="col-11 card">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Submitted</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg, index) => (
              <tr key={index}>
                <td>{msg.firstName} {msg.lastName}</td>
                <td>{msg.email}</td>
                <td>{msg.message}</td>
                <td>{new Date(msg.submittedAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;