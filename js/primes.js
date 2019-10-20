function primes(n) {
  // create array from 2 to n
  let is_prime = [];
  for (let i = 0; i < n + 1; i++) {
    is_prime.push(true);
  }
  is_prime[0] = is_prime[1] = false;
  for (let i = 2; i <= n; i++) {
    if (is_prime[i]) {
      for (let j = i * i; j <= n; j += i) {
        is_prime[j] = false;
      }
    }
  }

  let result = [];

  for (let i = 0; i < is_prime.length; i++) {
    if (is_prime[i] == true) {
      result.push(i);
    }
  }
  return result;
}
