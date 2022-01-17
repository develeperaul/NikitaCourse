<template>
    <div class="form">
        <form class="form__content" @submit.prevent="onSubmit">
            <div class="text-field text-field_floating-3">
                <input class="text-field__input" type="text" id="first_name" placeholder="Имя" name="name" v-model="name">
                <label class="text-field__label" for="first_name">Имя</label>
                <span class="text-danger">{{ nameError }}</span>
            </div>
            <div class="text-field text-field_floating-3">
                <input class="text-field__input" type="tel" id="phone" name="email" placeholder="+7 (9__) - ___ - __ - __" v-model="phone">
                <label class="text-field__label" for="phone">Телефон</label>
                <span class="text-danger">{{ phoneError }}</span>
            </div>
            <div class="text-field text-field_floating-3">
                <input class="text-field__input" type="email" id="email" name="email" placeholder="example@example.com" v-model="email" >
                <label class="text-field__label" for="email">Email</label>
                <span class="text-danger">{{ emailError }}</span>
            </div>

            <div class="form__btn">
                <button type="submit" class="link-course">записаться на курс</button>
            </div>
            <p class="form__personal">
                Нажимая на кнопку, я даю согласие на <a href="#">обработку персональных данных</a>
            </p>
        </form>
    </div>
</template>
<script>
import { useForm, useField, configure, defineRule  } from 'vee-validate';



import * as yup from 'yup';
import { setLocale } from 'yup';

setLocale({
    mixed: {
        default: 'Это поле эбязательно',
        required: 'Это поле эбязательно'
    }
});

// defineRule('required', required);
// defineRule('between', between);
// defineRule('confirmed', confirmed);
// configure({
//   generateMessage: localize({
//     ru
//   }),
// });
export default {
setup() {
    // Define a validation schema
    const schema = yup.object({
        name: yup.string().required().matches(/^[A-zА-яЁё]+$/i,'введите только буквы'),
        email: yup.string().required().email('Введите корректный email'),
        phone: yup.number().required().min(8)
    });
    // Create a form context with the validation schema
    const {handleSubmit } = useForm({
      validationSchema: schema,
    });
    // No need to define rules for fields
    const { value: email, errorMessage: emailError } = useField('email');
    const { value: name, errorMessage: nameError } = useField('name');
    const { value: phone, errorMessage: phoneError } = useField('phone');

    const onSubmit = handleSubmit(values => {
      alert(JSON.stringify(values, null, 2));
    });
    return {
      email,
      emailError,
      phone,
      phoneError,
      name,
      nameError,
      onSubmit
      
    };
  },
}
</script>