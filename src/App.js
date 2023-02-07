import logo from "./logo.svg";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

function App() {
  const GET_ARTIST = gql`
    query GetArtist {
      Beyonce {
        name
        image
        albums {
          name
        }
      }
    }
  `;

  const getArtistQ = () => {
    const { loading, error, data } = useQuery(GET_ARTIST);

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return data;
  };

  console.log(getArtistQ());

  return (
    <div className="App">
      <div>
        <h2>My first Apollo app 🚀</h2>
      </div>
    </div>
  );
}

export default App;
