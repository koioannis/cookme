// eslint-disable-next-line consistent-return
const authErrorMessages = (statusCode) => {
  let message = 'Ένα πρόβλημα προέκυψε! Εάν δεν μπρείτε να το λύτεσε στείλτε μας ένα μήνυμα.';

  if (statusCode === 401 || statusCode === 404) {
    message = 'Τα στοιχεία σας δεν είναι έγκυρα!';
  } else if (statusCode === 409) {
    message = 'Το Username ή το Email χρησιμοποιείτε ήδη.';
  }
  return message;
};

export default authErrorMessages;
