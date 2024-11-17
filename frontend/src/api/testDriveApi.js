import axios from "axios";

const API_URL = "http://localhost:5000/test-drive";

// Update a test drive booking
export const updateTestDrive = async (id, updatedData) => {
  return await axios.put(`${API_URL}/${id}`, updatedData);
};

// Delete a test drive booking
export const deleteTestDrive = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};