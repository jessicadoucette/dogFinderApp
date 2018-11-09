var dogs = [
  {
    name: "Fido",
    photo: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=71d59cd22de21da8d2939bc203617983&auto=format&fit=crop&w=2776&q=80",
    scores: [
			5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
		]
	},
	{
    name: "Sophie",
    photo: "https://images.unsplash.com/photo-1521907554502-7440e4702fc3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=47568e1c82503104064c9e7bd2785c06&auto=format&fit=crop&w=1234&q=80",
    scores: [
			3,
      2,
      4,
      3,
      5,
      2,
      4,
      3,
      3,
      1
		]
	},
	{
    name: "Heidi",
    photo: "https://images.unsplash.com/photo-1521907554502-7440e4702fc3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=47568e1c82503104064c9e7bd2785c06&auto=format&fit=crop&w=1234&q=80",
    scores: [
			3,
      2,
      4,
      1,
      3,
      2,
      4,
      3,
      3,
      4
		]
	},
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = dogs;

// console.log(dogList);
// module.exports = [];