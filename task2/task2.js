async function createUser() {
  const data = {
    name: "morpheus",
    job: "leader",
  };

  try {
    const response = await fetch("https://reqres.in/api/users", data);

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

createUser();
