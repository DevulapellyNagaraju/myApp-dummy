
---

### MyRouteFinder: A React-Based Route Mapping Application

![MyRouteFinder Screenshot](https://freepngimg.com/download/united_states/76079-google-computer-icons-states-maps-united-location.png)

**MyRouteFinder** is a web application built with React that allows users to find routes between two cities on an interactive map. It uses **Leaflet** for map rendering and **Leaflet Routing Machine** for route calculation. The application also includes a form for users to input their starting point and destination.

---

## Features

- **Interactive Map**: Displays a map using Leaflet and OpenStreetMap tiles.
- **Route Calculation**: Calculates and displays the route between two cities using Leaflet Routing Machine.
- **Form Validation**: Uses `react-hook-form` to validate user inputs.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **Custom Markers**: Displays custom markers for the starting point and destination.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Leaflet**: A React wrapper for Leaflet, used for rendering the map.
- **Leaflet Routing Machine**: A plugin for Leaflet to calculate and display routes.
- **react-hook-form**: A library for form validation and management in React.
- **Leaflet CSS**: Styles for Leaflet components.
- **OpenStreetMap**: Provides map tiles for the application.

---

## Installation

Follow these steps to set up and run the project locally:

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/MyRouteFinder.git
   cd MyRouteFinder
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm start
   ```

4. **Open the Application**:
   - The application will open automatically in your default browser at `http://localhost:3000`.
   - If it doesn't open automatically, you can manually navigate to the URL.

---

## Project Structure

```
MyRouteFinder/
├── src/
│   ├── App.js               # Main application component
│   ├── RoutingMachine.js    # Component for handling route calculation
│   ├── styles.js            # Styles for the application
│   ├── index.js             # Entry point of the application
├── public/
│   ├── index.html           # HTML template
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation
```

---

## How to Use

1. **Enter Starting Point and Destination**:
   - In the form, enter the names of the starting city and destination city.
   - Supported cities: Delhi, Mumbai, New York, Los Angeles.

2. **Locate Route**:
   - Click the "Locate Route" button to calculate and display the route on the map.

3. **View Route**:
   - The map will display markers for the starting point and destination.
   - The route between the two points will be drawn on the map.

---

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch to your forked repository.
5. Submit a pull request.

---



## Acknowledgments

- [Leaflet](https://leafletjs.com/) for the interactive map.
- [OpenStreetMap](https://www.openstreetmap.org/) for providing map tiles.
- [React Leaflet](https://react-leaflet.js.org/) for integrating Leaflet with React.
- [Leaflet Routing Machine](https://github.com/perliedman/leaflet-routing-machine) for route calculation.

---

## Contact

For any questions or feedback, feel free to reach out:

- **Devulapelly Nagaraju**  
- **Email**: dp.nagaraj2268@gmail.com  
- **GitHub**: [DevulapellyNagaraju](https://github.com/DevulapellyNagaraju)  

---

Enjoy using **MyRouteFinder**! 🚀

---

This `README.md` will help users understand your project and how to use it. Let me know if you need further assistance!
