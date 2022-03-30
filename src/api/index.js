const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const request = async (url, options = {}) => {
  try {
    const res = await fetch(url, options);
    return await res.json();
  } catch (e) {
    // send this to backend for tracking errors
    throw new Error(e);
  }
};
export async function saveUserApps(selectedApps) {
  await sleep(2000);
  return await request("/api/save-data", {
    body: JSON.stringify(selectedApps),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
