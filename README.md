# EasyRide App

## Overview

The EasyRide App is a ride-hailing mobile application that allows users to request rides, track drivers in real-time, and calculate optimal routes using Google APIs. The app consists of two primary modules:

- **Rider App** (for users to request rides)
- **Driver App** (for drivers to accept and complete rides)

## Features

- **Real-Time Ride Requests**: Riders can request a ride and get matched with nearby drivers.
- **Live GPS Tracking**: Riders and drivers can track each other in real-time using Google Maps API.
- **Estimated Fare Calculation**: Uses Google Distance API to estimate ride costs.
- **Route Optimization**: Google Route API helps find the best routes for drivers.
- **Ride History**: Users can view past rides and estimated trip costs.

## Tech Stack

### Frontend

- **React Native** (for cross-platform mobile app development)
- **Google APIs** (for maps, distance calculation, and route optimization)

## Google APIs Used

The app integrates multiple Google APIs for seamless functionality:

- **Google Places API** (for real-time location tracking and display)
- **Google Distance API** (to calculate travel distances and estimated fares)
- **Google Direction API** (for optimal navigation and route planning)

## Installation

### Prerequisites

- Node.js installed
- Google Cloud account with Maps, Distance, and Route APIs enabled

### Setup

1. **Clone the repository**

   git clone https://github.com/your-repo/easyride.git
   cd easyride

2. **Install dependencies**

   npm install

3. **Set up environment variables**
   Create a `.env` file in the root directory and add the necessary keys:

   GOOGLE_MAPS_APIKEY=your_google_maps_api_key

4. **Run the app**

   npm start

## Usage

1. Open the app and allow location permissions.
2. Enter your destination and request a ride.
3. View estimated fare and confirm ride request.
4.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries, reach out at christophernwozor@gmail.com
