# Clinics App

A React frontend for the Clinics API. The application allows users to manage patients, collect clinical information, and analyse clinical data.

## Overview

Clinics App is the frontend component of a full-stack clinical data application.

It communicates with the Spring Boot `clinics_API (https://github.com/ritujane78/clinics_API)` backend using Axios and uses React Router for navigation between patient, clinical-data, and analysis screens.

## Tech Stack

- React 19
- Vite
- Axios
- React Router
- React Toastify
- JavaScript
- ESLint

The current package configuration includes Axios, React Router, and React Toastify, with Vite 8.3.0 and the React Vite plugin for development. citeturn5view2

## Project Structure

```text
react_clinicsAPP/
├── public/
├── screenshots/
├── src/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── eslint.config.js
```

## Application Flow

The application includes screens for:

- Home / patient list
- Adding a patient
- Collecting clinical data for a patient
- Analysing a patient's clinical information

A typical workflow is:

```text
Patient List
     |
     +---- Add Patient
     |
     +---- Collect Clinical Data
     |
     +---- Analyse Patient
```

## Routing

The application uses React Router for routes such as:

```text
/
 /addPatient
 /patientDetails/:patientId
 /analyze/:patientId
```

The patient ID is passed through the route so that the corresponding patient and clinical records can be loaded from the API.

## API Integration

Axios is used to communicate with the Spring Boot backend.

The frontend communicates with endpoints under:

```text
http://localhost:8080/api
```

The application uses patient and clinical-data endpoints as well as the patient analysis endpoint.

## Notifications

React Toastify is used for user feedback such as successful operations and errors.

A toast container is configured in the application so notifications can be displayed consistently across the UI.

## Learning Goals

This project demonstrates:

- React component design
- React Router
- Route parameters
- Axios API calls
- Form handling
- Toast notifications
- Patient and clinical-data workflows
- Integrating a React frontend with a Spring Boot REST API
