const form = document.getElementById("form");
const phoneInput = document.getElementById("phone-number");
const submitBtn = document.getElementById("detect-btn");
const resultImg = document.querySelector("#detection-result img");

phoneInput.addEventListener("input", function () {
  const phoneNumber = phoneInput.value;

  if (isPhoneLocal(phoneNumber)) {
    submitBtn.classList.remove("hidden");
    phoneInput.setAttribute("maxlength", 10);
  } else if (isPhoneInternational(phoneNumber)) {
    submitBtn.classList.remove("hidden");
    phoneInput.setAttribute("maxlength", 13);
  } else {
    submitBtn.classList.add("hidden");
    phoneInput.removeAttribute("maxlength");
  }
});

function isPhoneLocal(phone) {
  return (
    phone.length === 10 &&
    (phone.startsWith("05") || phone.startsWith("07") || phone.startsWith("09"))
  );
}

function isPhoneInternational(phone) {
  return (
    phone.length === 13 &&
    (phone.startsWith("+9965") ||
      phone.startsWith("+9967") ||
      phone.startsWith("+9969"))
  );
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const phoneNumber = phoneInput.value;
  let operatorCode = "";

  if (isPhoneLocal(phoneNumber)) {
    operatorCode = phoneNumber.substring(1, 4);
  }

  if (isPhoneInternational(phoneNumber)) {
    operatorCode = phoneNumber.substring(4, 7);
  }

  let operator = "";

  if (operatorCode.startsWith("55") || operatorCode.startsWith("99")) {
    operator = "MegaCom";
  }

  if (operatorCode.startsWith("50") || operatorCode.startsWith("70")) {
    operator = "O!";
  }

  if (operatorCode.startsWith("77")) {
    operator = "Beeline";
  }

  console.log("Code:", operatorCode);
  console.log("Operator:", operator);

  switch (operator) {
    case "MegaCom":
      resultImg.setAttribute("src", "images/mega.png");
      break;
    case "O!":
        resultImg.src = "images/oshka.png";
        break;
    case "Beeline":
        resultImg.src = "images/beeline.jpg";
        break;
    default:
      resultImg.setAttribute("src", "images/error.png");
  }
});

resultImg.addEventListener("mouseenter", () => {
    const phone = phoneInput.value;

    if(isPhoneLocal(phone)){
        // const html = phone[0] + "<span class=\"special\">" + phone.substring(1, 4) + "</span>" + phone.substring(4);
        const html = phone[0] + "(" + phone.substring(1, 4) + ")" + phone.substring(4);
        phoneInput.value = html;
    }
})
