async function getData() {
  try {
    const response = await fetch("https://json.org/example.html");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

const data = getData();
console.log(data);
