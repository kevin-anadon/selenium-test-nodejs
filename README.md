# Selenium Test Environment

This repository provides a test environment for automating browser interactions using **Selenium WebDriver** with **Node.js**, **Mocha**, and **Selenium-WebDriver**. The tests are designed to interact with [ADM Lucid's Selenium Test Page](https://admlucid.com/Home/Selenium), which offers various UI components for testing automation.

## Features

- **Node.js**: JavaScript runtime for executing the tests
- **Mocha**: Test framework for structuring and running test cases
- **Selenium WebDriver**: Tool for automating browser interactions
- **Modular folder structure**: Organized test files for maintainability

## Project Structure

```bash
.
├── test/
│   ├── index.js              # Main test runner
│   └── specs/
│       ├── home.spec.js      # Test suite for Home Page
│       └── golf.spec.js      # Test suite for Golf Page
```


## Prerequisites

- Node.js (version 18+)
- Chrome, Firefox, Edge, Opera, Safari, more info [here](https://www.npmjs.com/package/selenium-webdriver#installation)

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/selenium-test-environment.git
cd selenium-test-environment
```
2. Install the dependencies:
```bash
npm install
```
3. Run the tests:
```bash
npm test
```

## How It Works
The tests are organized in the **test/specs** folder and executed via **Mocha**. The index.js file serves as the entry point for running all test cases.

* home.spec.js: Contains tests for verifying functionality on the home page of ADM Lucid's Selenium Test Page.
* golf.spec.js: Contains tests for verifying functionality on the Golf page of ADM Lucid's Selenium Test Page.

Each test case uses Selenium WebDriver to simulate user interactions and validate the behavior of the web application.

> Credits: (@testautomation999)[https://www.youtube.com/channel/UCjJRU4qQ8FcRxruCia5CfJQ]
