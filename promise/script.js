const fetchWeather = async () => {
  console.log("hello");
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=21.17&lon=72.83&appid=050bcc589fe73760676beb39119f11a3",
  );
  console.log("hello");

  const data = await res.json();
  console.log("hello");
};

// await-async keywords

// await - line hold until res not comes
// async - define function is asyncronous(network request/delay)

// syncronous = step by step

// asyncronous = sequence running--> can delay/hold as per requirement.
