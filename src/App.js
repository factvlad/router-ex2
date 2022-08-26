import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [state, setState] = useState({
    ability: [],
    perPage: 5,
  });
  const { ability, perPage } = state;

  useEffect(() => {
    function fetchPokemons() {
      const pokemon = fetch(
        `https://pokeapi.co/api/v2/ability?limit=${perPage}`
      );
      pokemon
        .then((response) => response.json())
        .then(({ results }) =>
          setState((prevState) => ({
            ...prevState,
            ability: results.map((item) => item.name),
          }))
        );
    }

    fetchPokemons();
  }, [perPage]);

  function onSelect(event) {
    // console.log(event.target.value);
    setState({
      ...state,
      perPage: event.target.value,
    });
  }

  return (
    <>
      <select name="ability" id="ability" onChange={onSelect} defaultValue="5">
        <option value="5">1-5</option>
        <option value="10">1-10</option>
        <option value="15">1-15</option>
      </select>
      <ol>
        {ability.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </>
  );
};

export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       ability: [],
//       perPage: 5,
//     };
//     this.onSelect = this.onSelect.bind(this);
//   }
//   // state = {
//   //   ability: [],
//   //   perPage: 5,
//   // };
//   componentDidMount() {
//     this.fetchPokemons();
//   }
//   componentDidUpdate(_, prevState) {
//     if (this.state.perPage !== prevState.perPage) {
//       this.fetchPokemons();
//     }
//   }
//   fetchPokemons() {
//     const pokemon = fetch(
//       `https://pokeapi.co/api/v2/ability?limit=${this.state.perPage}`
//     );
//     pokemon
//       .then((response) => response.json())
//       .then(({ results }) =>
//         this.setState({
//           ability: results.map((item) => item.name),
//         })
//       );
//   }
//   onSelect(event) {
//     // console.log(event.target.value);
//     this.setState({
//       perPage: event.target.value,
//     });
//   }
//   render() {
//     const { ability } = this.state;
//     return (
//       <>
//         <select
//           name="ability"
//           id="ability"
//           onChange={this.onSelect}
//           defaultValue="5"
//         >
//           <option value="5">1-5</option>
//           <option value="10">1-10</option>
//           <option value="15">1-15</option>
//         </select>
//         <ol>
//           {ability.map((item) => (
//             <li key={item}>{item}</li>
//           ))}
//         </ol>
//       </>
//     );
//   }
// }

// export default App;
