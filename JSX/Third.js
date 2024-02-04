function Dessert(props) {
      return <li>{props.title}</li>;
    }


function List() {
  const desserts = ['tiramisu', 'ice cream', 'cake'];
  return (
    <ul>
      {desserts.map((dessert) => <Item key={dessert} title={dessert} />)}
    </ul>
  );
}