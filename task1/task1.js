async function fetchUserData() {
  try {
    const response = await fetch("https://reqres.in/api/users/1");
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchUserData();
