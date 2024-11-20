 # Dynamic Form Generator

A real-time Dynamic Form Generator that takes a JSON schema as input and generates a styled, functional form in real-time. The app features a split-screen interface with a JSON editor on one side and a live preview of the generated form on the other.

---

## **Features**

- **Dynamic Form Generation**: Generate forms on the fly based on a provided JSON schema.
- **Real-Time Updates**: See changes in the form as you edit the JSON schema.
- **JSON Validation**: Validate JSON syntax and display helpful error messages.
- **Form Validation**: Proper error messages for required and invalid fields.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.
- **Theming and Styling**: Styled consistently using Tailwind CSS.
- **Submission Feedback**: Displays success and loading states on form submission.



## **Tech Stack**

- **Frontend**: React 18+, TypeScript, Tailwind CSS
- **Form Handling**: React Hook Form
- **JSON Editor**: Monaco Editor
- **Testing**: 
  - **Unit Tests**: Jest
  - **End-to-End Tests**: Playwright

---

## **Installation**

# Getting Started with Create React App
 Set up the project
# Initialize React App :  npx create-react-app dynamic-form-generator --template typescript

# Install Dependencies:  npm install tailwindcss react-hook-form ajv ajv-errors @monaco-editor/react playwright jest

1. tailwindcss for styling.
2. react-hook-form for form management.
3. ajv & ajv-errors for JSON schema validation.
4. @monaco-editor/react for the JSON editor.
5. playwright and jest for testing


# Tailwind CSS Setup : 
   Initialize Tailwind CSS: npx tailwindcss init
# JSON Editor 
       Use @monaco-editor/react for syntax-highlighted JSON editing
       Validate JSON in real-time with ajv




## Available Scripts

In the project directory, you can run:

# Run the Development Server
           `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000)


# Run Tests
         Unit Tests : npm test
         End-to-End Tests :  npx playwright test


 # Folder Structure 

   src/
├── components/
│   ├── Editor/
│   │   └── JsonEditor.tsx      // JSON editor component
│   ├── Form/
│   │   └── FormGenerator.tsx   // Form generator component
├── pages/
│   └── Home.tsx                // Main application layout
├── tests/
│   ├── Editor.test.tsx         // Unit tests for JSON editor
│   ├── Form.test.tsx           // Unit tests for form generator
│   ├── End-to-End/
│   │   ├── Editor.spec.ts      // E2E tests for JSON editor
│   │   └── Form.spec.ts        // E2E tests for form generator
├── utils/
│   ├── jsonValidator.ts        // Utility for JSON validation
│   ├── schemaInterfaces.ts     // TypeScript interfaces for JSON schema
├── App.tsx                     // Root component
├── index.tsx                   // Application entry point



 # Author
Your Name: Sunil Dagur
GitHub: sunildagur7078



