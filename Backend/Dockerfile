# Use a lightweight OpenJDK image
FROM openjdk:17-jdk-slim AS build

# Set working directory
WORKDIR /app

# Copy Gradle Wrapper and give execution permission
COPY gradlew gradlew.bat settings.gradle build.gradle /app/
COPY gradle /app/gradle/
RUN chmod +x /app/gradlew  # Fix missing execution permission

# Copy source code after Gradle files to utilize layer caching
COPY . .

# Build the application
RUN ./gradlew clean build -x test --no-daemon

# Second stage: Create a lightweight runtime container
FROM openjdk:17-jdk-slim

WORKDIR /app

# Copy the built JAR from the previous stage
COPY --from=build /app/build/libs/*.jar app.jar

# Expose the application port
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "app.jar"]
