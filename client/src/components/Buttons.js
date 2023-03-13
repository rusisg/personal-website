
export default function Buttons() {
    // const [posts, setPosts] = useState([]);
    //
    // useEffect(() => {
    //     axios.get('/api/xps')
    //         .then(response => setPosts(response.data));
    // }, []);

    return (
        <div className="buttons">
          <ul>
              <a href="/">
                  <li className="Home">Home</li>
              </a>
              <a href="/api/xps" >
                  <li className="Experiences">Experiences</li>
              </a>
              <a rel="noreferrer" href="https://github.com/rusisg?tab=repositories" target={"_blank"}>
                  <li className="github">github</li>
              </a>
            </ul>
      </div>
  )
}