function main() {
  // const subject = document.getElementById('subject');
  const name = document.getElementById("name").value;
  const mid_ex_sc = isNaN(parseFloat(document.getElementById("mid_ex_sc").value)) ? 0 : parseFloat(document.getElementById("mid_ex_sc").value);
  const mid_ex_per = isNaN(parseFloat(document.getElementById("mid_ex_pe").value)) ? 0 : parseFloat(document.getElementById("mid_ex_pe").value);
  const last_ex_sc = isNaN(parseFloat(document.getElementById("last_ex_sc").value)) ? 0 : parseFloat(document.getElementById("last_ex_sc").value);
  const last_ex_per = isNaN(parseFloat(document.getElementById("last_ex_pe").value)) ? 0 : parseFloat(document.getElementById("last_ex_pe").value);
  const $1_per_sc = isNaN(parseFloat(document.getElementById("1_per_sc").value)) ? 0 : parseFloat(document.getElementById("1_per_sc").value);
  const $1_per_pe = isNaN(parseFloat(document.getElementById("1_per_pe").value)) ? 0 : parseFloat(document.getElementById("1_per_pe").value);
  const $2_per_sc = isNaN(parseFloat(document.getElementById("2_per_sc").value)) ? 0 : parseFloat(document.getElementById("2_per_sc").value);
  const $2_per_pe = isNaN(parseFloat(document.getElementById("2_per_pe").value)) ? 0 : parseFloat(document.getElementById("2_per_pe").value);
  const $3_per_sc = isNaN(parseFloat(document.getElementById("3_per_sc").value)) ? 0 : parseFloat(document.getElementById("3_per_sc").value);
  const $3_per_pe = isNaN(parseFloat(document.getElementById("3_per_pe").value)) ? 0 : parseFloat(document.getElementById("3_per_pe").value);

  const last = mid_ex_sc * mid_ex_per / 100 + last_ex_sc * last_ex_per / 100 + $1_per_sc * $1_per_pe / 100 + $2_per_sc * $2_per_pe / 100 + $3_per_sc * $3_per_pe / 100;
  const real_last = last.toFixed(0);
  let ABCDE;
  if (real_last >= 90) {
    ABCDE = "A";
  } else if (real_last >= 80) {
    ABCDE = "B";
  } else if (real_last >= 70) {
    ABCDE = "C";
  } else if (real_last >= 60) {
    ABCDE = "D";
  } else {
    ABCDE = "E";
  }

  const js = {
    "name": name,
    "mid_ex_sc": mid_ex_sc,
    "mid_ex_per": mid_ex_per,
    "last_ex_sc": last_ex_sc,
    "last_ex_per": last_ex_per,
    "$1_per_sc": $1_per_sc,
    "$1_per_pe": $1_per_pe,
    "$2_per_sc": $2_per_sc,
    "$2_per_pe": $2_per_pe,
    "$3_per_sc": $3_per_sc,
    "$3_per_pe": $3_per_pe,
  }

  fetch('https://asdqwenm123.mcv.kr/score', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(js)
  });

  document.getElementById("last").innerHTML = real_last + "(" + ABCDE + ")";
}
