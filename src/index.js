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
    "Write the opening paragraph of a story, exactly four lines long. It should read like the first page of a novel, with a mix of narration and dialogue if it fits. The mood can be any style—wholesome, adventurous, romantic, dramatic, fantastical, or mysterious—as long as it stays PG-13 appropriate. Keep it vivid and unfinished enough that a writer would want to continue the story. After the four lines, add a <br/> and sign off as SheCodes AI inside a <strong> element.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let storyElement = document.querySelector("#story");
  storyElement.classList.remove("hidden");
  storyElement.innerHTML = `<div class="blink">⏳ Generating a story prompt about "${instructionsInput.value}"...</div>`;
  axios.get(apiURL).then(displayStory);
}

let storyPromptForm = document.querySelector("#prompt-form");
storyPromptForm.addEventListener("submit", generateStory);
