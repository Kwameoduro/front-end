const desserts = [
    {
      title: 'Chocolate Cake',
      description: 'Chocolate cake is a cake flavored with melted chocolate',
      calories: 500,
    }
  ];
  
  const newDesserts = desserts.map((dessert) => {
    return {
      title: dessert.title.toUpperCase(),
      ...dessert,
      kCal: dessert.calories / 1000,
    };
  });

  [
    {
      title: 'Chocolate Cake',
      description: 'Chocolate cake is a cake flavored with melted chocolate',
      calories: 500,
      kCal: 0.5,
    }
  ]

  // since the mapping output merges the previous object values after the title is re-defined, 
  // it has no effect and the title is still as before.
  //  Also, a new property is introduced, kCal.