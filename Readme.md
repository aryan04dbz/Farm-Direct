**AI driven platform connecting farmers and consumers with smart crop prediction**

An intelligent and user-friendly platform that connects farmers directly with consumers while leveraging AI-powered crop yield prediction for smarter, data-driven farming decisions. With up to 99% prediction accuracy, this solution helps optimize agricultural output, reduce waste, and ensure better market access and transparency.

🚀 Features
🔗 Farmer-to-Consumer Connection
A seamless platform enabling direct sales and communication between farmers and end consumers.

🌱 Smart Crop Yield Prediction
AI-powered yield forecasts using real-time inputs like rainfall, soil area, fertilizer, and pesticide usage.

📊 Visual Analytics
Graphs and plots to compare predicted vs actual yield.

🧠 Machine Learning Integration
Trained using Random Forest Regressor, scaled features, and PCA for better accuracy.

🛠️ Scalable Backend
Easily extendable API structure for real-time data input and prediction.

📂 Dataset
📁 Source: Crop yield dataset with features like State, Crop, Crop_Year, Season, Area, Rainfall, Fertilizer, Pesticide, and Yield.

✨ Preprocessing:

Label encoding for categorical data

Feature scaling using StandardScaler

Dimensionality reduction using PCA

-> Model Training Overview
🔍 Algorithm: RandomForestRegressor

📉 Metrics:

MSE, RMSE
R² Score

🧪 Test size: 20%

🎯 Accuracy: ~99% yield prediction for test data


🔧 Running the React Frontend Server
1.Navigate to the frontend directory:
cd frontend

2.Install dependencies:
npm install

3.Start the React server:
npm start
