export const fetchTestemunhos = () =>
  fetch(`http://localhost:3001/v1/testemunhos`, {
    credentials: "include",
  }).then((response) =>
    response.json()
  );

export const fetchTestemunhosUser = () =>
  fetch(`http://localhost:3001/v1/testemunhos/user`, {
    credentials: "include",
  }).then((response) => response.json());

export const fetchTestemunhoById = (id) =>
  fetch(`http://localhost:3001/v1/testemunhos/${id}`, {
    credentials: "include",
  }).then((response) => response.json());

export const createTestemunho = (
  accessToken,
  UA_IUPI,
  testemunho,
  frase,
  tipo
) =>
  fetch(`http://localhost:3001/v1/testemunhos`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ UA_IUPI, testemunho, frase, tipo }),
  }).then((response) => response.json());

export const updateTestemunho = (accessToken, id, testemunho, frase, tipo) =>
  fetch(`http://localhost:3001/v1/testemunhos/${id}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ testemunho, frase, tipo }),
  }).then((response) => response.json());

export const deleteTestemunho = (accessToken, id) =>
  fetch(`http://localhost:3001/v1/testemunhos/${id}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
