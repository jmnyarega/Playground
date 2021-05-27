class Database {
  private static instance: Database = null;
  public value: string;

  constructor(value: string) {
    this.value = value;
  }

  // this is the entry point
  public static getInstance(value: string): Database {
    if (Database.instance === null) {
      Database.instance = new Database(value);
    }
    return Database.instance;
  }
}
const db1 = Database.getInstance("Foo");
const db2 = Database.getInstance("Bar");

console.log(db1); // Foo
console.log(db2); // Foo
