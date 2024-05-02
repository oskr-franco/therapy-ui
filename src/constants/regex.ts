// BackEnd Regex
// email = `^$|^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$`;

const email = `^$|^[\\w\\-.]+@([\\w\\-]+\\.)+[\\w\\-]{2,4}$`;

type RegexCollectionType = {
  email: RegExp;
};

const RegexCollection: RegexCollectionType = {
  email: new RegExp(email),
};

export default RegexCollection;
