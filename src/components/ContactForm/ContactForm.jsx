import { Formik, Form, Field } from 'formik';
import css from './ContactForm.module.css'

export default function ContactForm({ onAdd }) {
    
  const handleSubmit = (values, actions) => {
      onAdd(values);
    actions.resetForm();

    //     onAdd({
    //     id: Date.now(),
    //   name: event.target.elements.name.value,
    //   number: event.target.elements.number.value,
    // });

  };

  return (<Formik initialValues={{
        name: "",
        number: "",
      }} onSubmit={handleSubmit}>
      <Form className={css.form}>
      <div className={css.input}>
        <label>Name</label>
        <Field
          className={css.field}
            type="text"
            name="name"
          />
      </div>

      <div className={css.input}>
        <label>Number</label>
        <Field
            className={css.field}
            type="tel"
            name="number"
          />
      </div>
      <button className={css.button} type="submit">Add contact</button>
    </Form>
    </Formik>
    
  );
}

