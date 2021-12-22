let rows = document.querySelectorAll(".galaxyRow.ctContentRow");
for (const e of rows) {
  console.log(
    e.querySelector(".cellPlayerName>span")
      ? e.querySelector(".cellPlayerName>span").innerText.length === 0
        ? e.querySelector(".cellPlayerName>span:nth-child(2)").innerText
        : e.querySelector(".cellPlayerName>span").innerText
      : null
  );
}
