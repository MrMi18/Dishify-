# Deshify  

Deshify is a restaurant discovery platform designed to provide users with real-time data about local restaurants. By leveraging the Swiggy API, Deshify offers location-based restaurant suggestions in an intuitive and responsive user interface.  

## Features  
- **Restaurant Discovery**: Get real-time data on local restaurants based on your location.  
- **Responsive Design**: Fully optimized for various screen sizes and devices.  
- **API Integration**: Seamless integration with the Swiggy API for accurate and dynamic restaurant data.  

## Technologies Used  

### Frontend  
- **React.js**: For building the dynamic user interface.  
- **TailwindCSS**: For styling components.  
- **React Router**: For efficient navigation across the app. 
- **Redux** : For state management.(React-Redux and Redux Toolkit (RTK)) 
- **Testing**: jest

### Backend  
- **Node.js**: For building the proxy server.  
- **Express.js**: For handling API requests and routing.  


### Deployment  
- **Netlify**: For hosting the frontend.  
- **Render**: For hosting the backend (proxy server).  

## Getting Started  

### Prerequisites  
- Node.js and npm installed on your system.  

### Installation  
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/deshify.git
   cd deshify
Navigate to the backend (swiggy-proxy) folder and install dependencies:

bash
Copy code
cd swiggy-proxy
npm install
Start the proxy server:

bash
Copy code
npm run start
Navigate to the frontend folder and start the development server:

bash
Copy code
cd ../frontend
npm install
npm start
Open your browser and go to http://localhost:3000 to view the app.

Deployment
Frontend
Deployed on Netlify for fast and reliable hosting.
Backend
Hosted on Render to manage the proxy server and API calls securely.
Challenges and Solutions
CORS Issues: Resolved by creating a proxy server in Node.js to handle API requests securely.
Brave Browser Compatibility: Adjusted headers and provided user instructions for disabling shields.
Real-time API Integration: Handled Swiggy's API restrictions by using custom headers and implementing efficient API call logic.
Future Improvements
Add user authentication and personalized recommendations.
Optimize API calls for better performance.
Integrate additional APIs for more diverse data.
Contributing
Feel free to fork this repository and create a pull request with your contributions.


Author: Mohammad Imran

