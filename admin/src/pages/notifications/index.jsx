import React, { useState } from "react";
import "./index.scss"; // Ensure this file contains the SCSS styles
import { useEffect } from "react";
import axiosInstance from "../../axiosInstance";
import Select from "react-select";
import { toast } from "react-toastify";

const NotificationPage = () => {
  const [notificationText, setNotificationText] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [sendAll, setSendAll] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const { data } = await axiosInstance.get("/users/admin/all-names");
    console.log(data);
    setUsers(data);
  };

  const handleSend = async () => {
    if (!notificationText) {
      alert("Please enter a notification message.");
      return;
    }

    const payload = {
      text: notificationText,
      userIds: selectedUsers.map((e) => e._id),
    };
    await axiosInstance.post(`/users/admin/send-notifications`, payload);

    toast.success("Notifications sent successfully.");
    setNotificationText("");
    setSelectedUsers([]);
  };

  const sendToAll = () => {
    setSelectedUsers(users);
  };

  console.log(selectedUsers);

  return (
    <div className="notification-page">
      <h1 className="title">Send Notifications</h1>
      <div className="notification-form">
        <div className="form-group">
          <label htmlFor="notificationText">Notification Text</label>
          <input
            type="text"
            id="notificationText"
            value={notificationText}
            onChange={(e) => setNotificationText(e.target.value)}
            placeholder="Enter your notification message here..."
          />
        </div>
        <div className="form-group">
          <label style={{ width: "max-content" }}>Users:</label>
          <Select
            isMulti
            name="users"
            value={selectedUsers.map((user) => ({
              value: user._id,
              label: user.email,
            }))}
            options={users?.map((user) => ({
              value: user._id,
              label: user.email,
            }))}
            onChange={(selectedOptions) => {
              setSelectedUsers(
                selectedOptions.map((option) => ({
                  _id: option.value,
                  email: option.label,
                }))
              );
            }}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={selectedUsers?.length === users.length}
              onChange={() => sendToAll()}
            />
            Send to All Users
          </label>
        </div>
        <button className="btn-save" onClick={handleSend}>
          Send Notification
        </button>
      </div>
    </div>
  );
};

export default NotificationPage;
