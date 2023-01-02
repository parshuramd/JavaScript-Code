console.log("Jonas" || 3);
console.log("" || "RAM");
console.log(0 || 2);
console.log(undefined || null || 2);
console.log(true && false);
console.log(0 ?? null ?? 2);
const rest1 = {
  name: "My Resto",
  numGuests: 20,
};
const rest2 = {
  name: "My Horel",
  owner: "Ram",
};
rest1.owner = rest1.owner || "ParshuRam";
rest2.owner = rest2.owner || "ParshuRam";
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
console.log(rest1, rest2);
