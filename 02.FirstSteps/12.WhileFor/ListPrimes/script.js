const n = 10;

for (let i = 2; i <= n; i++) {
  let prime = 2;

  while(true) {
    if (i % prime === 0) break;

    prime++;
  }

  if (i === prime) {
    alert(i);
  }
}
