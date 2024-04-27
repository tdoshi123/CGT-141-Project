document.addEventListener("DOMContentLoaded", function() {
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const tour = this.textContent; // Get the class of the clicked link
            const title = document.querySelector('#eventitle');
            title.innerHTML = tour;
            populateTable(tour); // Call function to populate table
        });
    });

    // Function to populate the table based on selected tour
    function populateTable(tour) {
        const tableBody = document.querySelector('#event-table tbody');
        tableBody.innerHTML = ''; // Clear existing table rows

        // Data
        const champ = [
            { date: "May 22 - 31", eventName: 'SHISEIDO Tahiti Pro', tour: tour },
            { date: 'Jun 6 - 15', eventName: 'Surf City El Salvador Pro', tour: tour },
            { date: 'Jun 22 - 30', eventName: 'VIVO Rio Pro', tour: tour },
            { date: 'Aug 20 - 29', eventName: 'Corona Fiji Pro', tour: tour },
            { date: 'Sep 6 - 14', eventName: 'WSL Finals', tour: tour }
        ];

        const challenge = [
            { date: 'May 9 - 16', eventName: 'Bonsoy Gold Coast Pro', tour: tour },
            { date: 'Jul 1 - 8', eventName: 'Ballito Pro', tour: tour },
            { date: 'Aug 5 - 11', eventName: 'US Open of Surfing', tour: tour },
            { date: 'Sep 29 - Oct 6', eventName: 'EDP Ericeira Pro', tour: tour },
            { date: 'Oct 12 - 20', eventName: 'Corona Saquarema Pro', tour: tour },
        ];

        const qualifying = [
            { date: 'May 22 - 26', eventName: 'Circuito Banco do Brasil de Surfe - Praia do Francês / AL', tour: tour },
            { date: 'May 28 - Jun 4', eventName: 'Krui Pro', tour: tour },
            { date: 'Jun 7 - 9', eventName: 'eThekwini Surf Pro', tour: tour},
            { date: 'Jun 10 - 17', eventName: 'Local Motion Surf Into Summer', tour: tour},
            { date: 'Jun 29 - 30', eventName: 'Ballito Open', tour: tour},
            { date: 'Aug 7 - 11', eventName: 'Boardmasters Surf Open', tour: tour},
            { date: 'Aug 21 - 25', eventName: 'Circuito Banco do Brasil Surf - 04', tour: tour},
            { date: 'Sep 26 - 29', eventName: 'Circuito Banco do Brasil Surf - 05', tour: tour}
        ];

        selectedData = [];
        if (tour == "Championship Tour") {
            selectedData = champ;
        } else if (tour == "Challenger Series") {
            selectedData = challenge
        } else if (tour =="Qualifying Series") {
            selectedData = qualifying
        }

        // Populate table rows with dummy data
        selectedData.forEach(event => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${event.date}</td>
                <td>${event.eventName}</td>
                <td>${event.tour}</td>
            `;
            tableBody.appendChild(row);
        });
    }
});