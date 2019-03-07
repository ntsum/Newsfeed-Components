// Because classes are not hoisted you will need to start your code at the bottom of the page. 
// Look for the comment "START HERE"
class Article {
  constructor(article) {
    // assign this.domElement to the passed in domElement
    this.article = article;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.article.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.article.classList.toggle('article-open');
      this.expandButton.textContent = 'hide'
  }
}
//START HERE: 
//Select all classes named ".article" and assign that value to the articles variable.  
const articles = document.querySelectorAll('.article');

//With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles
//NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.
articles.forEach(function(article){
  return new Article(article);
});

const headerTwo = document.querySelectorAll('h2');
TweenMax.to(headerTwo, 0.2, {scale:10, ease:Bounce.easeOut})
TweenMax.to(headerTwo, 0.2, {scale:1, delay:0.5})