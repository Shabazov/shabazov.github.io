var myBuilder = {
    createContainer: function() {
      var container = document.createElement('div');
      container.classList.add('container');
      document.body.insertBefore(container, document.body.firstChild);
    },
    createRows: function() {
      var row = document.createElement('div');
      row.classList.add('row');
      var container = document.querySelector('.container');
      for(var i = 0; i < 5; i++) {
      container.appendChild(row.cloneNode(true));
      }
    },
    createFirstColumn: function() {
      var firstColumn = document.createElement('div');
      firstColumn.classList.add('col-md-4');
      firstColumn.classList.add('col-md-offset-4');
      firstColumn.innerHTML = '<h3>Тест по программированию</h3>';
      var rowCollection = document.querySelectorAll('.row');
      rowCollection[0].appendChild(firstColumn);
    },
    createSecondColumn: function() {
      var secondColumn = document.createElement('div');
      secondColumn.classList.add('col-md-6');
      secondColumn.classList.add('col-md-offset-2');
      secondColumn.innerHTML = '<h4>1. Вопрос №1</h4>';
      var rowCollection = document.querySelectorAll('.row');
      rowCollection[1].appendChild(secondColumn);
    },
    createThirdColumn: function() {
      var thirdColumn = document.createElement('div');
      thirdColumn.classList.add('col-md-6');
      thirdColumn.classList.add('col-md-offset-2');
      thirdColumn.innerHTML = '<h4>2. Вопрос №2</h4>';
      var rowCollection = document.querySelectorAll('.row');
      rowCollection[2].appendChild(thirdColumn);
    },
    createFourthColumn: function() {
      var fourthColumn = document.createElement('div');
      fourthColumn.classList.add('col-md-6');
      fourthColumn.classList.add('col-md-offset-2');
      fourthColumn.innerHTML = '<h4>2. Вопрос №3</h4>';
      var rowCollection = document.querySelectorAll('.row');
      rowCollection[3].appendChild(fourthColumn);
    },
    createFifthColumn: function() {
      var fifthColumn = document.createElement('div');
      fifthColumn.classList.add('col-md-4');
      fifthColumn.classList.add('col-md-offset-4');
      fifthColumn.classList.add('submit');
      var rowCollection = document.querySelectorAll('.row');
      rowCollection[4].appendChild(fifthColumn);
    },
    createSubmit: function() {
      var submit = document.createElement('button');
      submit.classList.add('btn-block');
      submit.classList.add('btn-primary');
      submit.innerHTML = 'Проверить мои резултаты';
      var submitButton = document.querySelector('.submit');
      submitButton.appendChild(submit);
    },
    createInputGroup1: function(row) {
      var inputGroup1 = document.createElement('div');
      inputGroup1.classList.add('input-group');
      var secondColumn = document.querySelectorAll('.col-md-6');
      if(row === 1) {
          inputGroup1.insertAdjacentHTML('afterBegin', '<input type="radio" name="question1"/>');
          inputGroup1.insertAdjacentHTML('beforeEnd', '<span>Вариант ответа №1</span>');
          secondColumn[0].appendChild(inputGroup1.cloneNode(true));
        }
      if(row === 2) {
          inputGroup1.insertAdjacentHTML('afterBegin', '<input type="radio" name="question2"/>');
          inputGroup1.insertAdjacentHTML('beforeEnd', '<span>Вариант ответа №1</span>');
          secondColumn[1].appendChild(inputGroup1.cloneNode(true));
        }
      if(row === 3) {
          inputGroup1.insertAdjacentHTML('afterBegin', '<input type="radio" name="question3"/>');
          inputGroup1.insertAdjacentHTML('beforeEnd', '<span>Вариант ответа №1</span>');
          secondColumn[2].appendChild(inputGroup1.cloneNode(true));
        }
      },
    createInputGroup2: function(row) {
      var inputGroup2 = document.createElement('div');
      inputGroup2.classList.add('input-group');
      var secondColumn = document.querySelectorAll('.col-md-6');
      if(row === 1) {
          inputGroup2.insertAdjacentHTML('afterBegin', '<input type="radio" name="question1"/>');
          inputGroup2.insertAdjacentHTML('beforeEnd', '<span>Вариант ответа №2</span>');
          secondColumn[0].appendChild(inputGroup2.cloneNode(true));
        }
      if(row === 2) {
          inputGroup2.insertAdjacentHTML('afterBegin', '<input type="radio" name="question2"/>');
          inputGroup2.insertAdjacentHTML('beforeEnd', '<span>Вариант ответа №2</span>');
          secondColumn[1].appendChild(inputGroup2.cloneNode(true));
        }
      if(row === 3) {
          inputGroup2.insertAdjacentHTML('afterBegin', '<input type="radio" name="question3"/>');
          inputGroup2.insertAdjacentHTML('beforeEnd', '<span>Вариант ответа №2</span>');
          secondColumn[2].appendChild(inputGroup2.cloneNode(true));
        }
    },
    createInputGroup3: function(row) {
      var inputGroup3 = document.createElement('div');
      inputGroup3.classList.add('input-group');
      var secondColumn = document.querySelectorAll('.col-md-6');
      if(row === 1) {
          inputGroup3.insertAdjacentHTML('afterBegin', '<input type="radio" name="question1"/>');
          inputGroup3.insertAdjacentHTML('beforeEnd', '<span>Вариант ответа №3</span>');
          secondColumn[0].appendChild(inputGroup3.cloneNode(true));
        }
      if(row === 2) {
          inputGroup3.insertAdjacentHTML('afterBegin', '<input type="radio" name="question2"/>');
          inputGroup3.insertAdjacentHTML('beforeEnd', '<span>Вариант ответа №3</span>');
          secondColumn[1].appendChild(inputGroup3.cloneNode(true));
        }
      if(row === 3) {
          inputGroup3.insertAdjacentHTML('afterBegin', '<input type="radio" name="question3"/>');
          inputGroup3.insertAdjacentHTML('beforeEnd', '<span>Вариант ответа №3</span>');
          secondColumn[2].appendChild(inputGroup3.cloneNode(true));
        }
    },
  }
