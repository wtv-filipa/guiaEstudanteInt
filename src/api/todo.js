export const fetchToDoList = () =>
  fetch(`http://localhost:3001/v1/todolist/single`, {
    credentials: "include",
  }).then((response) => {
    return response.json();
  });

export const createToDoList = (
  accessToken,
  UA_IUPI,
  Aveiro,
  chegada,
  Preparar
) =>
  fetch(`http://localhost:3001/v1/todolist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
    body: JSON.stringify({
      UA_IUPI,
      Aveiro,
      chegada,
      Preparar,
    }),
  }).then((response) => response.json());

export const updateToDoList = (accessToken, id, Aveiro, chegada, Preparar) =>
  fetch(`http://localhost:3001/v1/todolist/${id}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      Aveiro,
      chegada,
      Preparar,
    }),
  }).then((response) => response.json());
