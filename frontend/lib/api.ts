const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiRequest = async (endpoint: string, options?: RequestInit) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  return res.json();
};
