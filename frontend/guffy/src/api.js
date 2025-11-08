const API_BASE_URL =  process.env.REACT_APP_API_URL || "http://localhost:5000"; // backend address

export async function getMessage() {
  const response = await fetch(`${API_BASE_URL}/api/message`);
  const data = await response.json();
  return data;
}
