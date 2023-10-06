const srcPath = (company) => {
  if (!company) {
    return true
  }
  return `/src/assets/logos/${company.toLowerCase()}.svg`
};

export default  srcPath