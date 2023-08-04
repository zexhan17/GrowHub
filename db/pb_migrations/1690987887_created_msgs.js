/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "nomfw1zy9vfg90g",
    "created": "2023-08-02 14:51:27.010Z",
    "updated": "2023-08-02 14:51:27.010Z",
    "name": "msgs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "owk81ter",
        "name": "msg",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lj54dquu",
        "name": "sender",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nomfw1zy9vfg90g");

  return dao.deleteCollection(collection);
})
