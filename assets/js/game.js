const gameConfig = [
    {
      choice: "Start",
      prompt: "A dragon is in front of you!",
      options: ["Run", "Fight"]
    },
    {
      choice: "Run",
      prompt: "There's a wall in front of you.",
      options: ["Climb", "Go around"]
    },
    {
      choice: "Fight",
      prompt: "The dragon breathes fire!",
      options: ["Duck", "Jump"]
    },
    {
      choice: "Duck",
      prompt: "The fire goes over your head!",
      options: ["Stab", "Run away"]
    },
    {
      choice: "Jump",
      prompt: "You die.",
      options: ["Start again?"]
    }
  ];
  
  const prompt = document.querySelector(".prompt");
  const chooser = document.querySelector(".chooser");
  const actBtn = document.querySelector(".act-btn");
  
  function act(choice) {
    prompt.textContent = gameConfig.filter(
      config => config.choice === choice
    )[0].prompt;
    chooser.innerHTML = gameConfig
      .filter(config => config.choice === choice)[0]
      .options.map(option => `<option value="${option}">${option}</option>`)
      .join("");
  }
  
  actBtn.addEventListener("click", () => act(chooser.value));
  
  act("Start");
  