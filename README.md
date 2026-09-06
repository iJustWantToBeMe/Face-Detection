## Face-Detection

🚧 **Status: Under Active Modernization** 
*Currently (very slowly...) refactoring this application to upgrade from React 16 to React 19, replace the deprecated Clarifai API with the open-source Hugging Face Inference API, and modernize the component architecture.*

!https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQYhc-DVPgbtnXUeisJsEeg0quq6xoHwLm55itdnxAdAMnl9FaiB-SbVHqzEo3ObdM9z9T9uCgPjTZqOVs(https://github.com/iJustWantToBeMe/Face-Detection/blob/main/example/example_face.png)
!https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTVibSQ9pGemdnJCQ65ZxC-P4xETSokRy7-UpBcA1vl0DpN50SKCApw-fszJ91NlhSwB7da81pi3Jog9EQ(https://github.com/iJustWantToBeMe/Face-Detection/blob/main/example/example_face2.png)

Face detection is a full-stack web application that utilizes the [Hugging Face](https://huggingface.co/facebook/detr-resnet-50) API to detect human faces within any provided image URL and map their coordinate locations with bounding boxes. Users can securely register, log in, and track their detection entry count via a connected backend database.

## 🛠 Tech Stack

### Front-End:
* `HTML5`
* `tachyons.css` (Utility-first styling)
* `React.js` (v19)

### Back-End:
* Node.js / Express.js
* Please refer [here](https://github.com/iJustWantToBeMe/Face-Detection-API) for the backend repository and setup instructions.

## 🚀 Getting Started

To run this project locally, clone the repository and follow these steps:

1. **Install dependencies:**
   ```bash
   npm install

2. **Configure API Keys:**
    You will need a free API token from Hugging Face.
    Open `src/App.js` and replace `"YOUR_API_KEY_HERE"` with your Hugging Face token.

3. **Start the development server:**
  ```bash
  npm start