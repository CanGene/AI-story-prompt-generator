function displayStory(response) {
  new Typewriter("#story", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}
function generateStory(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "df0033d89466fabb34t4ob6db243c833";
  let prompt = `Write a concise, intriguing opening to a story based on the theme ${instructionsInput.value}`;
  let context =
    "Write a 2-sentence opening to a story as if you are a master storyteller. Make it intriguing, set a clear tone, and leave enough mystery to inspire continuation. End with a line break <br/> and sign off as SheCodes AI in a <strong> element.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let storyElement = document.querySelector("#story");
  storyElement.classList.remove("hidden");
  storyElement.innerHTML = `<div class="blink">⏳ Generating a story prompt about "${instructionsInput.value}"...</div>`;
  axios.get(apiURL).then(displayStory);
}

let storyPromptForm = document.querySelector("#prompt-form");
storyPromptForm.addEventListener("submit", generateStory);
