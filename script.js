document.addEventListener("DOMContentLoaded", () => {

    const list = document.getElementById("list");

    const hostels = [
        { name: "Kabale Heights", price: 120000, location: "Near Bishop Barham", available: true, rating: 4, image: "https://picsum.photos/300/200?1" },
        { name: "Hill View Hostel", price: 150000, location: "Kabale Town", available: true, rating: 5, image: "https://picsum.photos/300/200?2" },
        { name: "Green Hills", price: 100000, location: "Nyabikoni", available: false, rating: 3, image: "https://picsum.photos/300/200?3" },
        { name: "Skyline Hostel", price: 130000, location: "Near UCU", available: true, rating: 4, image: "https://picsum.photos/300/200?4" },
        { name: "Comfort Hostel", price: 140000, location: "Rushoroza", available: true, rating: 4, image: "https://picsum.photos/300/200?5" },
        { name: "Lake View Hostel", price: 160000, location: "Kabale Town", available: false, rating: 5, image: "https://picsum.photos/300/200?6" },
        { name: "Nyabikoni Lodge", price: 110000, location: "Nyabikoni", available: true, rating: 3, image: "https://picsum.photos/300/200?7" },
        { name: "Highland Residence", price: 125000, location: "Near Bishop Barham", available: true, rating: 4, image: "https://picsum.photos/300/200?8" },
        { name: "Central Hostel", price: 135000, location: "Kabale Central", available: false, rating: 3, image: "https://picsum.photos/300/200?9" },
        { name: "Evergreen Hostel", price: 145000, location: "Near UCU", available: true, rating: 5, image: "https://picsum.photos/300/200?10" }
    ];

    function display(data) {
        list.innerHTML = "";

        if (data.length === 0) {
            list.innerHTML = "<p>No hostels found</p>";
            return;
        }

        data.forEach(h => {
            list.innerHTML += `
      <div class="card">
        <img src="${h.image}">
        <div class="card-content">
          <h3>${h.name}</h3>
          <p class="price">UGX ${h.price}</p>
          <p>📍 ${h.location}</p>
          <p>⭐ ${h.rating}</p>
          <p>${h.available ? "✅ Available" : "❌ Full"}</p>

          <button class="save" onclick="toggleSave(this)">❤️ Save</button>
          <button class="book" onclick="bookHostel('${h.name}')">📩 Book</button>
          <button class="map" onclick="openMap('${h.location}')">📍 Map</button>
        </div>
      </div>
    `;
        });
    }

    window.toggleSave = function (btn) {
        btn.innerText = btn.innerText === "❤️ Save" ? "💖 Saved" : "❤️ Save";
    };

    window.bookHostel = function (name) {
        alert("Booking request sent for " + name);
    };

    window.openMap = function (loc) {
        window.open("https://www.google.com/maps/search/" + { loc } + Kabale);
    };

    function filterHostels() {
        const search = document.getElementById("search").value.toLowerCase();
        const filter = document.getElementById("filter").value;

        const result = hostels.filter(h =>
            (h.name.toLowerCase().includes(search) ||
                h.location.toLowerCase().includes(search)) &&
            (filter === "all" || (filter === "available" && h.available))
        );

        display(result);
    }

    document.getElementById("search").addEventListener("keyup", filterHostels);
    document.getElementById("filter").addEventListener("change", filterHostels);

    display(hostels);

});