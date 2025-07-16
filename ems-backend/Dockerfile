# Use Eclipse Temurin OpenJDK 21 as base image
FROM eclipse-temurin:21-jdk-alpine

# Set working directory inside container
WORKDIR /app

# Copy Maven wrapper and pom files first (to leverage caching)
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Make mvnw executable
RUN chmod +x mvnw

# Download dependencies (this helps cache deps)
RUN ./mvnw dependency:go-offline -B

# Copy the rest of the source code
COPY src src

# Package the app (skip tests to speed up)
RUN ./mvnw clean package -DskipTests

# Run the packaged jar
CMD ["java", "-jar", "target/employeeManagementSystem-0.0.1-SNAPSHOT.jar"]

