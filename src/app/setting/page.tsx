"use client";
import { useState } from 'react';

const Settings = () => {
  const [email, setEmail] = useState('user@example.com');
  const [phone, setPhone] = useState('+1234567890');
  const [language, setLanguage] = useState('en');
  const [currency, setCurrency] = useState('USD');
  const [theme, setTheme] = useState('light');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // Function to handle form submissions for all settings
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle settings update logic such as making API calls
    console.log('Settings updated');
  };

  return (
    <div className={`max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg ${theme === 'dark' ? 'bg-gray-800 text-white' : ''}`}>
      <h1 className="text-2xl font-semibold mb-6">Account Settings</h1>

      {/* Change Password */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Change Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your current password"
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter your new password"
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            Update Password
          </button>
        </form>
      </section>

      {/* Email & Phone Number */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Email & Phone Number</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            Update Information
          </button>
        </form>
      </section>

      {/* Language Preferences */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Language Preferences</h2>
        <select
          onChange={(e) => setLanguage(e.target.value)}
          value={language}
          className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="en">English</option>
          <option value="ur">Urdu</option>
          {/* Add more languages */}
        </select>
      </section>

      {/* Currency Settings */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Currency Settings</h2>
        <select
          onChange={(e) => setCurrency(e.target.value)}
          value={currency}
          className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="USD">USD</option>
          <option value="PKR">PKR</option>
          {/* Add more currencies */}
        </select>
      </section>

      {/* Email/SMS Preferences */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Email/SMS Preferences</h2>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-sm">Receive email notifications</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-sm">Receive SMS notifications</span>
          </label>
        </div>
      </section>

      {/* Logout */}
      <section>
        <button className="w-full py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-500 focus:outline-none">
          Log Out
        </button>
      </section>
    </div>
  );
};

export default Settings;
