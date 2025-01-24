# Mono Repo Orders App

A modular NestJS application using a microservices architecture to manage orders, billing, and authentication. Built with a shared common library and MongoDB for data storage.

## 🏗️ Architecture

This project consists of three main microservices:
- **Auth Service**: User authentication and authorization
- **Orders Service**: Order processing and management
- **Billing Service**: Payment processing and invoicing

## 🚀 Features

- Microservices architecture using NestJS
- MongoDB database integration
- Shared common library for code reuse
- Docker containerization
- API documentation with Swagger
- JWT authentication
- Event-driven communication

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/allglenn/mono-repo-orders-app.git
cd mono-repo-orders-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

## 🏃‍♂️ Running the Application

### Development
```bash
# Start all services
npm run start:dev
```

### Production
```bash
# Build and start
npm run build
npm run start:prod
```

## 🧪 Testing

```bash
# Run tests
npm run test

# Run e2e tests
npm run test:e2e
```

## 📚 API Documentation

Access Swagger documentation for each service when running:
- Auth Service: `http://localhost:3001/api/docs`
- Orders Service: `http://localhost:3002/api/docs`
- Billing Service: `http://localhost:3003/api/docs`

## 👥 Contact

For inquiries or support, contact:
- Email: glennfreelance365@gmail.com
- GitHub: [@allglenn](https://github.com/allglenn)

## 📄 License

This project is licensed under the MIT License.