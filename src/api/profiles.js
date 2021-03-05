export const fetchProfiles = () =>
  fetch (`http://localhost:3001/v1/profiles`, {
    credentials: 'include',
  }).then (response => response.json ());

export const fetchProfile = () =>
  fetch (`http://localhost:3001/v1/profiles/single`,{credentials: 'include'}).then (response => {
    // return {
    //   profile: "blabla"
    // }
    return response.json ();
  });

export const createProfile = (
  accessToken,
  UA_IUPI,
  name,
  img,
  email,
  curso,
  departamento
) =>
  fetch (`http://localhost:3001/v1/profiles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
    body: JSON.stringify ({
      UA_IUPI,
      name,
      img,
      email,
      curso,
      departamento,
    }),
  }).then (response => response.json ());

export const updateProfile = (
  accessToken,
  id,
  email,
  curso,
  departamento
) =>
  fetch (`http://localhost:3001/v1/profiles/${id}`, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify ({
      email,
      curso,
      departamento
    }),
  }).then (response => response.json ());
