async function fetchRestaurants() {
  try {
    const response = await fetch(
      "https://10.120.32.94/restaurant/api/v1/restaurants"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
// Miten saadaan fetchattua ravintolan tiedot restautanttiin
fetchRestaurants().then((restaurants) => {
  displayrestaurants(restaurants);
});

async function fetchdailyMenu(id) {
  try {
    const response = await fetch(
      `https://10.120.32.94/restaurant/api/v1/restaurants/daily/${id}/fi`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function displayrestaurants(restaurants) {
  const table = document.querySelector("table");

  for (const restaurant of restaurants) {
    const menuData = await fetchdailyMenu(restaurant._id);
    restaurant.menu = menuData;

    const tr = document.createElement("tr");

    const name = document.createElement("td");
    name.textContent = restaurant.name;

    const address = document.createElement("td");
    address.textContent = restaurant.address;

    const menu = document.createElement("td");
    menu.textContent = restaurant.menu?.courses
      .map((course) => {
        return `${course.name} ${course.price}€`;
      })
      .join(", ");

    tr.appendChild(name);
    tr.appendChild(address);

    tr.addEventListener("click", () => {
      console.log(restaurant.menu);

      const menu = restaurant.menu?.courses.map((course) => {
        return `${course.name} ${course.price}€`;
      });

      document.getElementById("menuContainer").textContent = menu;
      document.getElementById("restaurantName").textContent = restaurant.name;
      document.getElementById("Address").textContent = restaurant.address;
      document.getElementById("postal-code").textContent =
        restaurant.postalCode;
      document.getElementById("city").textContent = restaurant.city;
      document.getElementById("phone").textContent = restaurant.phone;
      document.getElementById("company").textContent = restaurant.company;
      document.getElementById("restaurantModal").showModal();
    });

    table.appendChild(tr);
  }
}

document.getElementById("closeButton").addEventListener("click", () => {
  document.getElementById("restaurantModal").close();
});
