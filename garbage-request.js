const vehicles = [
    { id: 'V001', type: 'Truck', capacity: 10, status: 'Available' },
    { id: 'V002', type: 'Van', capacity: 5, status: 'Available' }
];

const drivers = [
    { id: 'D001', name: 'John Doe', availability: 'Available' },
    { id: 'D002', name: 'Jane Smith', availability: 'Available' }
];

document.getElementById("garbage-request-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const garbageType = document.getElementById("garbage-type").value;
    const weight = document.getElementById("weight").value;

    // Assign available vehicle and driver (randomly or systematically)
    const availableVehicle = vehicles.find(vehicle => vehicle.status === 'Available');
    const availableDriver = drivers.find(driver => driver.availability === 'Available');

    if (availableVehicle && availableDriver) {
        document.getElementById("assignment-result").textContent = `Vehicle: ${availableVehicle.type} (ID: ${availableVehicle.id}), Driver: ${availableDriver.name}`;
        
        // Update their statuses to "Unavailable"
        availableVehicle.status = 'Unavailable';
        availableDriver.availability = 'Unavailable';
    } else {
        document.getElementById("assignment-result").textContent = "No available vehicle or driver at the moment.";
    }
});
