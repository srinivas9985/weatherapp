# Weather App

## Prerequisites

Before you start, ensure you have the following installed:

- **Node.js** (Recommended: Latest LTS version) → [Download](https://nodejs.org/)
- **Yarn** (Package Manager) → Install via:
  ```sh
  npm install -g yarn
  ```
- **React Native CLI** (If not installed globally):
  ```sh
  npm install -g react-native-cli
  ```
- **Android Studio** (for Android development) → [Download](https://developer.android.com/studio)
- **Xcode** (for iOS development) → Install from the Mac App Store
- **CocoaPods** (for iOS dependencies):
  ```sh
  sudo gem install cocoapods
  ```

## Project Setup

1. **Extract the ZIP file** to your desired location.
2. **Navigate to the project folder:**
   ```sh
   cd weatherApps
   ```
3. **Install dependencies:**
   ```sh
   yarn install
   ```

## Running the App

### Android
1. Start an Android emulator or connect a physical device.
2. Run the app:
   ```sh
   yarn android
   ```

### iOS (Mac Only)
1. Install iOS dependencies:
   ```sh
   cd ios && pod install && cd ..
   ```
2. Run the app:
   ```sh
   yarn ios
   ```

## Additional Commands

- **Start Metro Bundler manually:**
  ```sh
  yarn start
  ```
- **Run tests:**
  ```sh
  yarn test
  ```
- **Clean Cache (if issues occur):**
  ```sh
  yarn start --reset-cache
  ```

## Troubleshooting

- If the app doesn't start, try cleaning the build:
  ```sh
  cd android && ./gradlew clean && cd ..
  ```
- Ensure all dependencies are installed correctly.
- Check for any missing environment variables or setup steps.

### Enjoy Coding! 🚀

