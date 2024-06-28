# Weather-App

A simple weather application that provides current weather information based on the user's location or a searched city.

## Features

- Fetches current weather data for the user's location using geolocation.
- Allows users to search for weather information by city name.
- Displays temperature, weather conditions, humidity, and wind speed.
- User-friendly interface.
- Forecast of Next 3 Days

## Technologies Used

- HTML
- TailWind Css
- JavaScript
- OpenWeatherMap API

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/SohamDeshmukh1/Weather-App.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Weather-App
    ```

3. Open `index.html` in your preferred web browser.

## Usage

1. Upon loading, the app will attempt to fetch the current weather data based on your location.
2. To search for a specific city's weather, enter the city name in the search box and click the search button.

## Screenshot

![Tweet1](https://github.com/SohamDeshmukh1/Weather-App/assets/131663742/a3579d90-4c30-4a44-ab6b-35c136b029a7)

![Tweet 2](https://github.com/SohamDeshmukh1/Weather-App/assets/131663742/c240fcff-904c-4f2b-8740-0d59c364b3a4)


## Editing CSS

To customize the styles of the application, you can edit the CSS files directly:

1. Open the `output.css` file located in the project directory.
2. Make your desired changes to the CSS rules.
3. Save the file and refresh your browser to see the changes.

## Using Tailwind CSS

To start using Tailwind CSS:

1. Install Tailwind CSS via npm:
    ```bash
    npm install tailwindcss
    ```

2. Create a `tailwind.config.js` file:
    ```bash
    npx tailwindcss init
    ```

3. Configure your template paths in `tailwind.config.js`:
    ```javascript
    module.exports = {
      content: ["./*.html"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

4. Create a `styles.css` file and import Tailwind's base, components, and utilities:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

5. Build your CSS:
    ```bash
    npx tailwindcss -i ./styles.css -o ./output.css --watch
    ```

6. Include the compiled `output.css` in your `index.html` file:
    ```html
    <link href="output.css" rel="stylesheet">
    ```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.


