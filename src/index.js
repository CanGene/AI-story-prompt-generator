function displayStory(response) {
  new Typewriter("#story", {
    strings: response.data.answer,
    autoStart: true,
    delay: 5,
    cursor: "",
  });
}
function generateStory(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "df0033d89466fabb34t4ob6db243c833";
  let prompt = `Write a concise, intriguing opening to a story based on the theme ${instructionsInput.value}`;
  let context =
    "Write exactly 4 sentences that begin a story—not a description, not a summary—based on the prompt. Use direct narration, as if the reader has just opened the first page of a novel. Make it intriguing, set the tone, and leave enough mystery for continuation. End with a <br/> and sign off as SheCodes AI in a <strong> element.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let storyElement = document.querySelector("#story");
  storyElement.classList.remove("hidden");
  storyElement.innerHTML = `<div class="blink">⏳ Generating a story prompt about "${instructionsInput.value}"...</div>`;
  axios.get(apiURL).then(displayStory);
}

let storyPromptForm = document.querySelector("#prompt-form");
storyPromptForm.addEventListener("submit", generateStory);
