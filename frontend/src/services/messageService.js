import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true, // Include cookies in requests
});
export const sendMessage = async ({ name, email, message }) => {
  try {
    // Construct the subject as "Name - Email"
    const subject = `${name} - ${email}`;

    // Prepare request body
    const requestData = {
      subject,
      messageBody: message,
    };

    // Send the POST request
    const response = await API.post("/messages", requestData);

    return response.data; // Return data if you need it
  } catch (error) {
    console.error("Failed to send message:", error);
    throw error; // Re-throw so the component can handle the error
  }
};
