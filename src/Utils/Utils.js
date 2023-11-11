exports.checkEmailInLocalStorage = (email) => {
  const lemail = localStorage.getItem(email.toLowerCase());

  if (lemail) {
    return true;
  } else {
    return false;
  }
};

exports.saveSignUpData = (obj) => {
  const email = obj.email.toLowerCase();

  localStorage.setItem(email, JSON.stringify(obj));
};

exports.loginCheck = (obj) => {
  const email = obj.email.toLowerCase();
  const locData = localStorage.getItem(email);

  if (locData) {
    const result = JSON.parse(locData);
    return result;
  }
};
