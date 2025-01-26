import React, { useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../axiosInstance";

export default function SendNotificationModal({ user, onClose }) {
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const sendNotification = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axiosInstance.post(`/users/admin/send-notification/${user._id}`, {
        message,
      });
      console.log("1");
      toast.success("Notification sent successfully.");
      setSending(false);
      onClose();
    } catch (err) {
      toast.error("Failed to send email.");
      setSending(false);
      console.log(err);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <form onSubmit={sendNotification}>
          <div className="form-group">
            <label>Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Notification"}
            </button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
