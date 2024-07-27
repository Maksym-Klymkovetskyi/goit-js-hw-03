function slugify(title) {
    const lowerCaseTitle = title.toLowerCase();
    const slug = lowerCaseTitle.split(" ").join("-");
    return slug;
}


console.log(slugify("Arrays for beffiners"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to became a JUNIOR developer in TWO WEEKS"));