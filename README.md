# Product API

The Product API is a Node.js Express application that provides information about various products stored in a MongoDB database. This API supports essential functionalities such as sorting, filtering, and pagination.

## Features

- **Sorting:** You can sort the list of products based on various parameters such as name, price, or date added.

- **Filtering:** Easily filter products based on different criteria, like company or category.

- **Pagination:** Manage large sets of data with ease by paginating through the list of products.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed locally or accessible MongoDB connection URI.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/product-api.git
    ```

2. Navigate to the project directory:

    ```bash
    cd RestApi
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Configuration

1. Open the `.env` file and provide your MongoDB connection URI:

    ```env
    MONGODB_URI=mongodb://localhost:27017/product-database
    ```

    Replace `product-database` with the name of your MongoDB database.

2. Save the changes.

## Running the API

Start the API using the following command:

```bash
npm run start

## Demo

Visit below link to take demo:
```
https://restapi-production-4c22.up.railway.app/api/products
```
