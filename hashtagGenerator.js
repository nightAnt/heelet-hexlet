// The  Hashtag Generator
// Функция блять принимает строку в которой блять все слова раздельны и с маленькой,
// либо с большой вообще похуй, буквы.
// Выдает одно слово, в котором слова соединились и начинаются с большой буквы.

function generateHashtag(str) {
  let strNonSpace = str.replace(/\s/g, "");
  if (strNonSpace.length === 0) return false;
  if (strNonSpace.length >= 140) {
    return false;
  } else {
    return `#${str
      .split(/\s+/)
      .map((item) => item[0].toUpperCase() + item.slice(1))
      .join("")}`;
  }
}
