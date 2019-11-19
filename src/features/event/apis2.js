import { createEvent } from "./eventActions";
export async function attendUser(userUid, event) {
  let url = "http://34.84.235.122:3000/api/SampleTransaction";

  const eventId = event.id;

  const body = {
    $class: "com.betweak.carauction.SampleTransaction",
    board: `resource:com.betweak.carauction.Board#${eventId}`,
    newuserUid: `${userUid}`
  };

  console.log(JSON.stringify(body));

  const response = await fetch(url, {
    method: "POST",

    headers: {
      Accept: "application/json",

      "Content-Type": "application/json"
    },

    body: JSON.stringify(body)
  });

  if (response.ok) {
    console.log(response);

    return response.json();
  } else {
    createEvent(event);
    attendUser(userUid, event);
  }

  return false;
}
