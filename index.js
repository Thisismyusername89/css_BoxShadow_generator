function changeit() {
  const x = document.getElementById("x").value;
  const y = document.getElementById("y").value;
  const blr = document.getElementById("blr").value;
  const spr = document.getElementById("spr").value;
  const clr = document.getElementById("clr").value;
  setchange(x, y, blr, spr, clr);
}

function setchange(x, y, blr, spr, clr) {
  document.getElementById("xval").textContent = x;
  document.getElementById("yval").textContent = y;
  document.getElementById("blrval").textContent = blr;
  document.getElementById("sprval").textContent = spr;
  document.getElementById("clrval").textContent = clr;
  let card = document.getElementById("card");
  let boxStyle = `${x}px ${y}px ${blr}px ${spr}px ${clr}`;
  card.style.boxShadow = boxStyle;
  let code = `box-shadow:${boxStyle};`;
  document.getElementById("src_code").textContent = code;
}
