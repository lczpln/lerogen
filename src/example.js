const Entry = require("./functions/Entry");

Entry.Create(10).Model(() => ({
  id: Entry.types.guid(),
  name: Entry.types.name(),
  email: Entry.types.email(2, ".", ".com.br"),
  money: Entry.types.currency("R$", 0, 900),
  status: {
    active: Entry.types.bool(70),
    role: Entry.types.enum(["Player", "Administrator"]),
    age: Entry.types.int(18, 35),
    height: Entry.types.int(160, 190),
  },
  items: Entry.Create(5).Collection(() => ({
    id: Entry.types.guid(),
    description: Entry.types.desc(),
    value: Entry.types.currency("R$", 10, 100)
  })),
  createdAt: Entry.types.date("2020-02-01", "2020-02-18", "yyyy-MM-dd HH:mm")
}));