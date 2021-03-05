//Parte da BD
const getCollection = require("../utils/getCollection");
const getDocumentFromCollection = require("../utils/getDocumentFromCollection");

const COLLECTION_NAME = "testemunhos";
const COLLECTION_NAME_USERS = "users";

module.exports = {
  get: async (UA_IUPI) => {
    if (!UA_IUPI) {
      return {};
    }
    const coll = getCollection(COLLECTION_NAME);
    const profileColl = getCollection(COLLECTION_NAME_USERS);
    return coll.where("UA_IUPI", "==", UA_IUPI).get().then(testemunhos => {
      if (testemunhos.empty) {
        return {};
      }
      return profileColl.where("UA_IUPI", "==", UA_IUPI).get().then(user => {

        return testemunhos.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            frase: data.frase,
            testemunho: data.testemunho,
            tipo: data.tipo,
            timestamp: data.timestamp,
          }
        });
      })
    })

  },
  getTestInd: async (id) => {
    if (!id) {
      throw new Error("An ID must be provided");
    }
    const coll = getCollection(COLLECTION_NAME);
    const profileColl = getCollection(COLLECTION_NAME_USERS);
    return coll.doc(id).get().then(doc => {
      let UA_IUPI = doc.data().UA_IUPI;

      return profileColl.where("UA_IUPI", "==", UA_IUPI).get().then(user => {
        let infoUser = user.docs.map((doc) => {
          return {
            curso: doc.data().curso,
            nome: doc.data().name,
            img: doc.data().img,
          }
        })[0];
        
        return {
          frase: doc.data().frase,
          testemunho: doc.data().testemunho,
          nome: infoUser.nome,
          curso: infoUser.curso,
          img: infoUser.img,
          timestamp: doc.data().timestamp,
          tipo: doc.data().tipo,
        }
      });
    });
  },
  getAll: async () => {
    const coll = getCollection(COLLECTION_NAME);
    const profileColl = getCollection(COLLECTION_NAME_USERS);

    return await coll.get().then(testemunhos => {
      if (testemunhos.empty) {
        return {};
      }

      let prom = testemunhos.docs.map((doc) => {
        let IUPI = doc.data().UA_IUPI;
        if (IUPI) {
          return profileColl.where("UA_IUPI", "==", IUPI).get().then(user => {

            let infoUser = user.docs.map((doc) => {
              return {
                curso: doc.data().curso,
                nome: doc.data().name,
                img: doc.data().img,
              }
            })[0];
            return {
              id: doc.id,
              frase: doc.data().frase,
              testemunho: doc.data().testemunho,
              tipo: doc.data().tipo,
              timestamp: doc.data().timestamp,
              curso: infoUser.curso,
              nome: infoUser.nome,
              img: infoUser.img,
            }
          })
        } else {
          return {};
        }
      })
      return Promise.all(prom);
    })
  },
  create: async (body) => {
    if (!body) {
      throw new Error("A body must be provided");
    }

    const coll = getCollection(COLLECTION_NAME);

    const testemunhoCreate = {
      ...body,
      timestamp: new Date().getTime()
    };

    const docRef = await coll.add(testemunhoCreate);

    return {
      id: docRef.id,
      ...testemunhoCreate
    };
  },
  update: async (id, body) => {
    if (!id) {
      throw new Error("An ID must be provided");
    }

    if (!body) {
      throw new Error("A body must be provided");
    }

    const coll = getCollection(COLLECTION_NAME);
    const doc = getDocumentFromCollection(coll, id);

    const testemunhoUpdate = {
      ...body,
      timestamp: new Date().getTime()
    };

    await doc.update(testemunhoUpdate);
    return true;
  },
  remove: async (id) => {
    if (!id) {
      throw new Error("An ID must be provided");
    }

    const coll = getCollection(COLLECTION_NAME);
    const doc = getDocumentFromCollection(coll, id);

    await doc.delete();
    return true;
  }
}