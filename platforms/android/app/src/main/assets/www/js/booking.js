async function loadPackages() {
  const response = await fetch("api/get_packages.php");

  const packages = await response.json();

  const select = document.getElementById("packageSelect");

  select.innerHTML = '<option value="">Select Package</option>';

  packages.forEach((pkg) => {
    select.innerHTML += `
            <option
                value="${pkg.id}"
                data-price="${pkg.price}"
            >
                ${pkg.package_name}
                - ₱${pkg.price}
            </option>
        `;
  });
}

loadPackages();

const packagePrices = {
  1: 5000,
  2: 6000,
  3: 7000,
  4: 8000,
  5: 10000,
  6: 12000,
};

const packageSelect = document.getElementById("packageSelect");

const extraRoom = document.querySelector('input[name="extra_room"]');

const hall = document.querySelector('input[name="function_hall_ac"]');

const totalPrice = document.getElementById("totalPrice");

function calculateTotal() {
  let total = 0;

  if (packageSelect.value) {
    total += packagePrices[packageSelect.value];
  }

  if (extraRoom.checked) {
    total += 1500;
  }

  if (hall.checked) {
    total += 2000;
  }

  totalPrice.innerText = "₱" + total.toLocaleString();
}

packageSelect.addEventListener("change", calculateTotal);

extraRoom.addEventListener("change", calculateTotal);

hall.addEventListener("change", calculateTotal);

document
  .getElementById("bookingForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    const response = await fetch("api/booking.html", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    alert(result.message);

    if (result.success) {
      this.reset();
      totalPrice.innerText = "₱0";
    }
  });
