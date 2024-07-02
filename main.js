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

  let last = mid_ex_sc * mid_ex_per / 100 + last_ex_sc * last_ex_per / 100 + $1_per_sc * $1_per_pe / 100 + $2_per_sc * $2_per_pe / 100 + $3_per_sc * $3_per_pe / 100;
  let real_last = last.toFixed(0);
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

  let A, B, C, D/*, E*/;
  let a = false

  if (last_ex_sc === 0) {
    for (let i = 0; i <= 100; i++) {
      let vir_last = mid_ex_sc * mid_ex_per / 100 + i * last_ex_per / 100 + $1_per_sc * $1_per_pe / 100 + $2_per_sc * $2_per_pe / 100 + $3_per_sc * $3_per_pe / 100;
      let vir_real = vir_last.toFixed(0);

      if (vir_real >= 90 && A === undefined) {
        A = i;
        a = true
      }
      if (vir_real >= 80 && B === undefined) {
        B = i;
        a = true
      }
      if (vir_real >= 70 && C === undefined) {
        C = i;
        a = true
      }
      if (vir_real >= 60 && D === undefined) {
        D = i;
        a = true
      }
      // if (vir_real >= 50 && vir_real > real_last && E === undefined) {
      //   E = i;
      //   a = true
      // }
    }
    // console.log(A, B, C, D/*, E*/);
    document.getElementById("last").innerHTML = "";
    document.getElementById("expect").innerHTML = (a ? "최소..." : "아쉽게도 E밖에 계산이 안되었어요.") + (!A ? "" : " A: " + A) + (!B ? "" : ", B: " + B) + (!C ? "" : ", C: " + C) + (!D ? "" : ", D: " + D)/* + (E === undefined ? "" : ", E: " + E) */+ (a ? "점 이상!" : "");
  } else {
    document.getElementById("expect").innerHTML = ""
    document.getElementById("last").innerHTML = real_last + "(" + ABCDE + ")";

  }


  fetch('https://asdqwenm123.mcv.kr/score', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(js)
  });


}
