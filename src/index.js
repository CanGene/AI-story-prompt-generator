function displayStory(response) {
  new Typewriter("#story", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generateStory(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "df0033d89466fabb34t4ob6db243c833";
  let prompt = `Write a concise, intriguing opening to a story based on the theme ${instructionsInput.value}`;
  let context =
    "You are a master storyteller. Write a concise intro to a story and keep it 2 sentences long. It should immediately draw the reader in, set a tone, and leave enough unsaid to make a writer want to keep writing. Sign off as 'SheCodes AI' inside a <strong> element after a <br/>.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayStory);
}

let storyPromptForm = document.querySelector("#prompt-form");
storyPromptForm.addEventListener("submit", generateStory);
