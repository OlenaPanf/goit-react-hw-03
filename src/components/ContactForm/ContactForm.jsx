
export default function ContactForm({ onAdd }) {
    
    const handleSubmit = (event) => {
    event.preventDefault();

        onAdd({
        id: Date.now(),
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    });

    event.target.reset();
  };

    return (
    <form onSubmit={handleSubmit}>
      <div >
        <label>Name</label>
        <input type="text" name="name" />
      </div>

      <div >
        <label>Number</label>
        <input type="text" name="number" />
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
}

