function isAnagram(n1, n2) {
  if (n1.length !== n2.length) {
    return false;
  }
  let n1Sort = n1.split("").sort().join();
  let n2Sort = n2.split("").sort().join();

  if (n1Sort !== n2Sort) {
    return false;
  }
  return true;
}

function isAnagram(n1, n2) {
  if (n1.length !== n2.length) {
    return false;
  }

  const countN1 = {};
  const countN2 = {};

  for (let i = 0; i < n1.length; i++) {
    countN1[n1[i]] = (countN1[n1[i]] || 0) + 1;
    countN2[n2[i]] = (countN2[n2[i]] || 0) + 1;
  }

  for (const key in countN1) {
    if (countN1[key] !== countN2[key]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram("safa", "safa"));
