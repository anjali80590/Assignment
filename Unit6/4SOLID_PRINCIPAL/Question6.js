
console.log("=== Q5: Dependency Inversion Principle ===");

class Database {
  save(data) {
    throw new Error("Method 'save()' must be implemented");
  }
}

class MySQLService extends Database {
  save(data) {
    console.log("Saving to MySQL:", data);
  }
}

class PostgreSQLService extends Database {
  save(data) {
    console.log("Saving to PostgreSQL:", data);
  }
}

class MongoDBService extends Database {
  save(data) {
    console.log("Saving to MongoDB:", data);
  }
}

class UserService {
  constructor(database) {
    this.db = database;
  }

  register(user) {
    this.db.save(user);
  }
}

const mysqlUserService = new UserService(new MySQLService());
mysqlUserService.register("John Doe");

const postgresUserService = new UserService(new PostgreSQLService());
postgresUserService.register("Jane Smith");

const mongoUserService = new UserService(new MongoDBService());
mongoUserService.register("Bob Wilson");
