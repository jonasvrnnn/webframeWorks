//hide-start
const styles = {
  inputFields: {
    display: "grid", gridTemplateColumns: "70px 200px"
  }
}
//hide-end
const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  console.log(event.target.value);
}
//hide-start
const InputView = () => {
  return (
    <div>
      <div style={styles.inputFields}>
        <label htmlFor="name">name:</label>
        <input type="text" id="name" onChange={handleChange} />
        <label htmlFor="year">year:</label>
        <input type="number" id="year" name="year" min="1900" max="2021" />
      </div>
      <input type="button" id="submit" value="Add Movie" />
    </div>
  )
}
//hide-end
//hide-start
const App = () => {
  return <InputView />
}

export default App;
//hide-end