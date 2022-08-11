module.exports = class Data1660194115628 {
  name = 'Data1660194115628'

  async up(db) {
    await db.query(`CREATE TABLE "market" ("id" character varying NOT NULL, "template" bytea NOT NULL, "created" numeric NOT NULL, CONSTRAINT "PK_1e9a2963edfd331d92018e3abac" PRIMARY KEY ("id"))`)
  }

  async down(db) {
    await db.query(`DROP TABLE "market"`)
  }
}
