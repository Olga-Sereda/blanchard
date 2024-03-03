const validator = new JustValidate('#form');

validator.addField("#name", [
  {
    rule: 'required',
    errorMessage: 'Вы&nbsp;не&nbsp;ввели имя'
  },
  {
    rule: 'minLength',
    value: 2,
    errorMessage: 'Минимум 2 символа'
  }
])
.addField("#tel", [
  {
    rule: 'required',
    errorMessage: 'Вы&nbsp;не&nbsp;ввели телефон'
  },
  {
    rule: 'number',
    errorMessage: 'Вы&nbsp;не&nbsp;верно ввели телефон'
  },
  {
    rule: 'minLength',
    value: 11,
    errorMessage: 'Минимум 11 цифр'
  }
])