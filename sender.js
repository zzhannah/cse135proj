import data from './collector.js';

(async () => {
  const rawResponse = await fetch('https://cse135proj.site/api/static', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const content = await rawResponse.json();

  console.log(content);
})();

