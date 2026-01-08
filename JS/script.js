// Отфильтрованные и важные требования:

// Максимальный размер инвентаря задаётся параметром maxSize
// Инвентарь ограничен, нельзя хранить больше предметов, чем maxSize.

// Если добавляемый предмет уже есть в инвентаре → увеличиваем его count, не добавляя дубликат.

// Если инвентарь не полон → новый предмет добавляется в конец.

// Если инвентарь полон → удаляем самый старый предмет (первый в списке), затем добавляем новый предмет в конец.

// Входные данные — JSON-объект вида:

const data = `{
  "inventory": [
    {"name": "меч", "count": 1},
    {"name": "щит", "count": 1},
    {"name": "зелье", "count": 3},
    {"name": "кольчуга", "count": 1}
  ],
  "newItem": {"name": "доспехи", "count": 1},
  "maxSize": 4
}`;
const inventoryData = JSON.parse(data);
function addInventory(inventoryData) {
  const { inventory, newItem, maxSize } = inventoryData;
  let checked = false;
  for (let i = 0; i < inventory.length; i++) {
    if (newItem.name === inventory[i].name) {
      inventory[i].count += newItem.count;
      checked = true;
      break;
    }
  }
  if (!checked) {
    if (inventory.length < maxSize) {
      inventory.push(newItem);
    } else {
      inventory.shift();
      inventory.push(newItem);
    }
  }
  console.log(JSON.stringify(inventory));
}

addInventory(inventoryData);
