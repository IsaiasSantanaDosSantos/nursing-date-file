fetch('https://gist.githubusercontent.com/IsaiasSantanaDosSantos/9c49640abc06a68cb4cf9827f940d1dc/raw/92abb49617bf6faaf751380bdc2ea1165dd2adf4/nursing_data.json')
  .then(response => response.json())
  .then(data => {
    // Faça algo com os dados do arquivo JSON
    console.log(data);
  })
  .catch(error => {
    // Trate qualquer erro que ocorra durante a solicitação
    console.error(error);
  });
/// #########################################

  const gistId = '9c49640abc06a68cb4cf9827f940d1dc';

fetch(`https://api.github.com/gists/${gistId}`)
  .then(response => response.json())
  .then(data => {
    // Faça algo com os dados do Gist
    // console.log(data);
    const content = data.files["nursing_data.json"].content;
    const contentObj = JSON.parse(content);

   console.log(contentObj)
  })
  .catch(error => {
    console.error(error);
  });


//   for (const key in contentObj) {
//     if (contentObj.hasOwnProperty(key)) {
//         const value = contentObj[key];
//         console.log(key, value);
//     }
//     }

