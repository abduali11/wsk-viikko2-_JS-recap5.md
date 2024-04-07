async function errorhandling() {
  try {
    const response = await fetch("https://reqres.in/api/unknown/23");
    method: "POST";
    headers: {
      ("Content-Type");
      ("application/json");
    }

    body: JSON.stringify({
      name: "morpheus",
      job: "leader",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

errorhandling();
