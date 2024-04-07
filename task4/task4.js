async function reUsableFunction(url, options) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

reUsableFunction("https://reqres.in/api/users/2", { method: "GET" })
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
