export async function attendUser(userUid, eventId) {
  let today = new Date();
  let url = "http://34.84.235.122:3000/api/SampleTransaction";


  const body = {
    $class: "com.betweak.carauction.SampleTransaction",

    board: { boardId: eventId },
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
  }

  return false;
}
