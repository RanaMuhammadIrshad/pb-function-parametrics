// Complete the function below so that it returns "Two for me and one for you" when no arguments are passed
console.log(`-----twofer-----`);
const twofer = (who) => {
  if (typeof who === "string") {
    return `Two for me and one for ${who}`;
  } else return `Two for me and one for ${(who = "you")}`;
};

console.log(twofer("Fran")); // -> "Two for me and one for Fran"
console.log(twofer()); // -> "Two for me and one for you"
