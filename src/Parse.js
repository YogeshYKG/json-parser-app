function ParseJSON(inputString) {
  const tokens = tokenize(inputString);
  return parseTokens(tokens);
}

export default ParseJSON;


function tokenize(str) {
  const tokens = [];
  let i = 0;

  const isWhitespace = (char) => /\s/.test(char);

  while (i < str.length) {
    const char = str[i];

    if (isWhitespace(char)) {
      i++;
      continue;
    }

    if (char === "{" || char === "}" || char === "[" || char === "]" || char === ":" || char === ",") {
      tokens.push(char);
      i++;
      continue;
    }

    if (char === '"') {
      let j = i + 1;
      let result = "";
      while (j < str.length) {
        if (str[j] === '"' && str[j - 1] !== "\\") break;
        result += str[j++];
      }
      tokens.push(`"${result}"`);
      i = j + 1;
      continue;
    }

    let literal = "";
    while (i < str.length && !isWhitespace(str[i]) && !["{", "}", "[", "]", ":", ","].includes(str[i])) {
      literal += str[i++];
    }
    tokens.push(literal);
  }

  return tokens;
}


function parseTokens(tokens) {
  let i = 0;

  const parseValue = () => {
    const token = tokens[i];

    if (token === "{") return parseObject();
    if (token === "[") return parseArray();
    if (token[0] === '"') return parseString();
    if (token === "true") return true;
    if (token === "false") return false;
    if (token === "null") return null;
    if (!isNaN(token)) return Number(token);

    throw new Error(`Unexpected token: ${token}`);
  };

  const parseString = () => {
    const str = tokens[i++];
    return str.slice(1, -1).replace(/\\"/g, '"'); // unescape
  };

  const parseArray = () => {
    const result = [];
    i++; // skip '['
    while (tokens[i] !== "]") {
      result.push(parseValue());
      if (tokens[i] === ",") i++;
    }
    i++; // skip ']'
    return result;
  };

  const parseObject = () => {
    const obj = {};
    i++; // skip '{'
    while (tokens[i] !== "}") {
      const key = parseString();
      if (tokens[i] !== ":") throw new Error("Expected ':' after key");
      i++;
      const value = parseValue();
      obj[key] = value;
      if (tokens[i] === ",") i++;
    }
    i++; // skip '}'
    return obj;
  };

  return parseValue();
}
