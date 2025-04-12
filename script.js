document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("base-classes");

  classData.forEach(base => {
    const baseCard = document.createElement("div");
    baseCard.className = "class-card";

    const baseTitle = document.createElement("div");
    baseTitle.className = "class-title";
    baseTitle.textContent = base.name;
    baseCard.appendChild(baseTitle);

    base.advanced.forEach(adv => {
      const advBranch = document.createElement("div");
      advBranch.className = "branch-list";
      advBranch.innerHTML = `<strong>${adv.name}</strong>`;

      const prestigeList = document.createElement("ul");
      adv.prestige.forEach(p => {
        const item = document.createElement("li");
        item.textContent = p;
        prestigeList.appendChild(item);
      });

      advBranch.appendChild(prestigeList);
      baseCard.appendChild(advBranch);
    });

    container.appendChild(baseCard);
  });
});
