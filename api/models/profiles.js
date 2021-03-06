//Parte da BD
const getCollection = require("../utils/getCollection");
const getDocumentFromCollection = require("../utils/getDocumentFromCollection");

const COLLECTION_NAME = "users";

module.exports = {
  get: async (UA_IUPI) => {
    if (!UA_IUPI) {
      throw new Error("An ID must bem provided");
    }
    const coll = getCollection(COLLECTION_NAME);
    //create a query against the collection
    const queryRef = await coll.where("UA_IUPI", "==", UA_IUPI).limit(1).get();
    if (queryRef.empty) {
      return {};
    }
    return queryRef.docs.map((doc) => {
      
      return {
        // name:doc.data().name,
        // email:doc.data().email,
        id: doc.id,
        curso:doc.data().curso,
        departamento:doc.data().departamento,

      }
      // let data = {
      //   ...doc.data(),
      //   id: doc.id
      // };

    })[0];
  },
  getAll: async () => {
    const coll = getCollection(COLLECTION_NAME);
    const query = await coll.get();

    return query.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  },
  create: async (body) => {
    if (!body) {
      throw new Error("A body must be provided");
    }

    const coll = getCollection(COLLECTION_NAME);
    const docRef = await coll.add(body);

    return { id: docRef.id, ...body };
  },
  update: async (id, body) => {
    if (!id) {
      throw new Error("An ID must be provided");
    }

    if (!body) {
      throw new Error("A body must be provided");
    }

    const coll = getCollection(COLLECTION_NAME);
    const queryRef = getDocumentFromCollection(coll, id);

    if (queryRef.empty) {
      return {};
    }

    await queryRef.update(body);
    return true;
  },
};
