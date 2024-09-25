const cooks = new Map();
cooks.set("Виктор", "Пицца");
cooks.set("Ольга", "Суши");
cooks.set("Дмитрий", "Десерты");

const dishes = new Map();
dishes.set(`Пицца "Маргарита"`, "Виктор");
dishes.set(`Пицца "Пепперони"`, "Виктор");
dishes.set(`Суши "Филадельфия"`, "Ольга");
dishes.set(`Суши "Калифорния"`, "Ольга");
dishes.set(`Тирамису`, "Дмитрий");
dishes.set(`Чизкейк`, "Дмитрий");

const orders = new Map(
{ client: "Алексей", order: `Пиццу "Пепперони" и Тирамису` },
{ client: "Мария", order: `Суши "Калифорния" и Пиццу "Маргарита"` },
{ client: "Ирина", order: "Чизкейк" }
)

console.log(cooksSpecialization);

