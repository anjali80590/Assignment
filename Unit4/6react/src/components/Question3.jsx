function Question3({
  name = "John Doe",
  age = 30,
  bio = "This is a default bio of a person who is passionate about coding, design, and tech innovation.",
}) {
  const shortBio =
    bio.length > 100 ? bio.substring(0, 100) + "… Read More" : bio;

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: 10,
        maxWidth: 300,
        marginBottom: 10,
      }}
    >
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>{shortBio}</p>
    </div>
  );
}

export default Question3;
