async function makeRequest(url, method, body = null) {
  try {
    const options = {
      method: method,
      headers: {},
    };

    if (body) {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("Error during fetch operation:", error.message);
  }
}

const nonExistentUrl = "https://reqres.in/api/unknown/23";

makeRequest(nonExistentUrl, "GET");

const userData = { name: "John Doe", job: "Developer" };
makeRequest(nonExistentUrl, "POST", userData);

const updatedUserData = { name: "Jane Doe", job: "Senior Developer" };
makeRequest(nonExistentUrl, "PUT", updatedUserData);

makeRequest(nonExistentUrl, "DELETE");
