# Database-Crawler

## Description
This is a text based game with images that allows the user to play through an adventure centered around escaping a dungeon. It uses a sql database to store all persistent data relating to users and the characters that belong to them as well as the predefined contents of the game. This app utilizes uses a complex set of tables and relations including items and characters in a many to many association through a join table. Interactions to the sql were handled through mysql and sequelize and information was passed back and forth on an express server using api-routes.

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [Bootstrap](https://getbootstrap.com/)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JS](https://www.javascript.com/)
* [Jquery](https://jquery.com/)
* [GitHub](https://github.com/)
* [Git](https://git-scm.com/)
* [node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [express](https://www.npmjs.com/package/express)
* [express-session](https://www.npmjs.com/package/express-session)
* [mysql](https://www.npmjs.com/package/mysql)
* [MySQL Workbench](https://www.mysql.com/products/workbench/)
* [mysql2](https://www.npmjs.com/package/mysql2)
* [bcryptjs](https://www.npmjs.com/package/bcrypt)
* [passport](http://www.passportjs.org/)
* [passport-local](http://www.passportjs.org/packages/passport-local/)
* [sequelize](https://sequelize.org/)
* [Heroku](https://dashboard.heroku.com/)
* [Jawsdb](https://www.jawsdb.com/)

## Deployed Link

* [See Live Site](https://ancient-wave-96254.herokuapp.com/)

## Preview of Working Site

![Image]()

## Code Snippet
This code snippet shows the javascript linked from the main game page. This code is in charge of making an api request for data from the sql and then rendering it in the character information section of the screen. It uses chart.js to render a pie chart that shows the balance of your characters strengths and weaknesses. 

```javascript
    function characterRender(id) {
    chartDiv.empty();
    var newCanvas = $("<canvas>");
    newCanvas.attr("id", "myChart");
    chartDiv.append(newCanvas);
    $.get("/api/characters/" + id).then(function (data) {
        characterId = id;
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'pie',

            // The data for our dataset
            data: {
                labels: ['Strength', 'Intelligence', 'Dexterity'],
                datasets: [{
                    label: 'Character Stats',
                    backgroundColor: ['rgb(214, 40, 40)', 'rgb(46, 94, 170)', 'rgb(50, 160, 93)'],
                    borderColor: 'white',
                    data: [
                        data.strength,
                        data.intelligence,
                        data.dexterity

                    ]
                }]
            },
            // Configuration options go here
            options: {}
        });

        characterDescription.text(data.description);
```



## Authors

* **Raffi Lepejian** 
* **Peter Ting**
* **Austin Woo**

## Contact Information

- [Link to Portfolio Site](https://rslepejian.github.io/portfolio/)
- [Link to Github](https://github.com/rslepejian)
- [Link to LinkedIn](https://linkedin.com/in/raffi-lepejian-071876153)

- [Link to Portfolio Site](https://pting1995.github.io/Portfolio-mk2/)
- [Link to Github](https://github.com/Pting1995)
- [Link to LinkedIn](https://www.linkedin.com/in/pting002/)

- [Link to Portfolio Site](#)
- [Link to Github](https://github.com/austinwoo123)
- [Link to LinkedIn]()