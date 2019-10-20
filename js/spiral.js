function spiral(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    let line = [];
    for (let j = 0; j < n; j++) {
      line.push(-1);
    }
    res.push(line);
  }

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  let x = (y = step = 0);

  for (let i = 1; i <= n * n; i++) {
    res[x][y] = i;
    let tx = x + dx[step];
    let ty = y + dy[step];
    if (!(0 <= tx && tx < n && 0 <= ty && ty < n) || res[tx][ty] != -1) {
      step = (step + 1) % 4;
      tx = x + dx[step];
      ty = y + dy[step];
    }
    x = tx;
    y = ty;
  }
  console.table(res);
}
