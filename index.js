const pg = require("knex")({
  client: "pg",
  connection: process.env.POSTGRES_URL,
  searchPath: ["knex", "public"],
});

// Create a table
const createTable =async ()=>{
await pg.schema
  .createTable("users", (table) => {
    table.increments("id");
    table.string("user_name");
  })
  // ...and another
  .createTable("accounts", (table) => {
    table.increments("id");
    table.string("account_name");
    table.integer("user_id").unsigned().references("users.id");
  });
}

createTable()
.then(()=>{
  console.log("table saved")
})
.catch((error)=>{
console.log("error occured",error)
})

console.log("ok");
