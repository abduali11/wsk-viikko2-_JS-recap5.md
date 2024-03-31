async function createUser() {
  try {
    const userData = {
      name: "John Doe",
      job: "Web Developer",
    };

    const response = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

createUser();
