import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="Name"
          pattern="^[a-zA-Za]+(([' \-][a-zA-Za])?[a-zA-Za]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          placeholder="Number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button className={css.button_add} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.prototypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
