# Link Tree

## Description

Your project is a web application that allows users to log in using Google authentication, set their unique username, and upload a profile photo. Users can confirm the availability of a username before setting it. The application relies on Firebase and Firebase Admin for authentication and data storage.

## Features

- **Google Authentication:** Users can log in using their Google accounts to obtain the necessary credentials.
- **Username Management:** Users can set their unique username and confirm the availability of existing usernames.
- **Profile Management:** Users can upload a profile photo and view their username, photo, title, and a list of link trees.
- **Link Management:** Users have a screen to edit, add, and delete links, with changes reflected in real-time.

## Technologies Used

- **Svelte:** A modern JavaScript framework for building user interfaces.
- **Firebase:** A comprehensive platform for developing web and mobile applications.
- **DaisyUI:** A component library for Tailwind CSS, providing additional UI components.
- **Tailwind CSS:** A utility-first CSS framework for building responsive and customizable designs.

## Firebase Configuration

Before running the application, you need to configure Firebase. Create a `.env` file in the root of your project and add the following configuration:

```env
# .env

# Firebase Configuration
FB_SERVICE_ACCOUNT="path/to/your/service-account.json"
FB_PROJECT_ID="your-firebase-project-id"
FB_CLIENT_EMAIL="your-firebase-client-email@your-firebase-project.iam.gserviceaccount.com"
FB_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_GOES_HERE\n-----END PRIVATE KEY-----"

```
##
Replace the placeholder values with your own Firebase configuration details:

- Replace **"path/to/your/service-account.json"** with the path to your Firebase service account JSON file.
- Replace **"your-firebase-project-id"** with your Firebase project ID.
- Replace **"your-firebase-client-email@your-firebase-project.iam.gserviceaccount.com"** with your Firebase client email.
- Replace the multiline string in **FB_PRIVATE_KEY** with your Firebase private key.

## Usage
1. **Clone the repository:**

```bash
git clone https://github.com/Nassefferjeni/link-tree.git
```

2. **Navigate to the project directory:**
```bash
cd link-tree
```
3. **Install dependencies:**
```bash
npm install
```

4. **Create a .env file in the root of the project and add your Firebase configuration (as described above).**

5. **Run the application:**
```bash
npm run dev
