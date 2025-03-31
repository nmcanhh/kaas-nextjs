# Next.js Static Site

## Introduction
This project is built with Next.js and exported as static HTML.

## Installation

Before running the project, install the dependencies:

```sh
npm install
```

Or if using Yarn:

```sh
yarn install
```

## Build and Export Static Files

To build and export the project as static files, run the following command:

```sh
npm run build && npm run export
```

Or:

```sh
yarn build && yarn export
```

After running the above command, all static files will be generated in the `/out` directory.

## Run Static Files

You can serve the static files in multiple ways:

### 1. Using `serve`

```sh
npx serve out
```

### 2. Using `http-server`

Install `http-server` if not already installed:

```sh
npm install -g http-server
```

Run the server:

```sh
http-server out
```

### 3. Deploy to Nginx or Apache

You can upload the `/out` directory to a server and configure Nginx or Apache to serve the static files.

## Directory Structure

```sh
├── pages/           # Next.js pages
├── public/          # Static files
├── styles/          # CSS & SCSS
├── .next/           # Build directory
├── out/             # Static files after export
├── package.json     # Project configuration
└── README.md        # Documentation
```

## Contact
If you have any questions, please contact via email or open an issue on GitHub.

