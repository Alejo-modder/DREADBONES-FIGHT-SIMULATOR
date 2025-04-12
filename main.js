const buttons = [
  { id: "btn-fight", base: "fight", selected: "fight_selected" },
  { id: "btn-act", base: "act", selected: "act_selected" },
  { id: "btn-item", base: "item", selected: "item_selected" },
  { id: "btn-mercy", base: "mercy", selected: "mercy_selected" }
];

let selectedIndex = 0;

function updateButtons() {
  buttons.forEach((btn, index) => {
    const img = document.getElementById(btn.id);
    if (index === selectedIndex) {
      img.src = `img/${btn.selected}.png`;
    } else {
      img.src = `img/${btn.base}.png`;
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    selectedIndex = (selectedIndex + 1) % buttons.length;
    updateButtons();
  } else if (e.key === "ArrowLeft") {
    selectedIndex = (selectedIndex - 1 + buttons.length) % buttons.length;
    updateButtons();
  }
});

updateButtons();
