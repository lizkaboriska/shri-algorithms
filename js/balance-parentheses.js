function balanceParentheses(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "<") {
      stack.push(s[i]);
    } else if (stack.length == 0) {
      return false;
    } else {
      let last_elem = stack[stack.length - 1];
      if (s[i] == ")") {
        if (last_elem == "(") {
          stack.pop();
        } else {
          return false;
        }
      } else if (s[i] == "}") {
        if (last_elem == "{") {
          stack.pop();
        } else {
          return false;
        }
      } else if (s[i] == ">") {
        if (last_elem == "<") {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return stack.length == 0;
}
