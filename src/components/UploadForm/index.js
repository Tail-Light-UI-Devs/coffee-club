import React from 'react';
import { withFormik, Form, Field } from 'formik';

const UploadForm = () => (
  <Form>
    <Field type="text" name="title" placeholder="Title" />
    <Field type="text" name="description" placeholder="Description" />
    <Field type="text" name="boughtLocation" placeholder="Bought Location" />
    <Field type="text" name="flavor" placeholder="Flavor" />
    <Field type="text" name="rating" placeholder="Rating" />
    <button>Submit Coffee</button>
  </Form>
);

export default withFormik({
  handleSubmit({ title, description, boughtLocation, flavor, rating }) {
    fetch('https://ui-coffee-club-api.herokuapp.com/api/create-coffee', {
      body: {
        title,
        description,
        boughtLocation,
        flavor,
        rating
      }
    })
      .then(() => {
        alert('Successfully added coffee!');
      })
      .catch(() => {
        alert('Uh oh! Something went terribly wrong.');
      });
  }
})(UploadForm);
