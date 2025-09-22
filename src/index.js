function generateStory(event) {
  event.preventDefault();

  new Typewriter("#story", {
    strings:
      "A lone lighthouse blinked against the storm, guiding ships that never came. Inside, its keeper whispered to the sea, hoping it would whisper back.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let storyPromptForm = document.querySelector("#prompt-form");
storyPromptForm.addEventListener("submit", generateStory);
