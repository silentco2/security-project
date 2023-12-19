import { useReducer } from "react";

function App() {
  

  return (
    <div className="app">
      <Form />
    </div>
  )
}


const initialState = {
  cipher: "ceaser",
  k: 0
  
}
function reducer(state, action){
  switch (action.type){
    case "cipherSelected":
      return {
        cipher: action.payLoad
      }
    case "keyEntered":
      return {
        ...state, k: action.payLoad
      }
  }
}

function Form(){
  const [state, dispatch] = useReducer(reducer, initialState);
  const {cipher, k} = state;
  const b = <div className="form-group"><label htmlFor="key">Enter Key</label><input type="text" className="form-control" value={k} onChange={(e) => dispatch({type: "keyEntered", payLoad: e.target.value})} /></div>
  console.log(cipher, k);
  return (<form>
    <div className="form-group">
      <label htmlFor="exampleFormControlSelect1"></label>
      <select className="form-control" id="exampleFormControlSelect1" onClick={(e) => dispatch({type: "cipherSelected", payLoad: e.target.value})}>
        <option value="ceaser">Ceaser</option>
        <option value="viginere">Viginere</option>
        <option value="auto key">Auto Key</option>
        <option value="rsa">RSA</option>
        <option value="hill">Hill Cipher</option>
        <option value="affine">Affine</option>
      </select>
    </div>
    <div className="text-container">
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Encryption</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Decryption</label>
        <textarea className="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="key">Enter Key</label>
      <input type="text" className="form-control" value={k} onChange={(e) => dispatch({type: "keyEntered", payLoad: e.target.value})} />
    </div>
    {cipher==='affine' || cipher==='rsa'?b:cipher==='hill'?:null}
</form>);
}
function Hill(){
  return(
    <select className="form-control" id="exampleFormControlSelect1" onClick={(e) => dispatch({type: "cipherSelected", payLoad: e.target.value})}>
        <option value="ceaser">Ceaser</option>
        <option value="viginere">Viginere</option>
        <option value="auto key">Auto Key</option>
        <option value="rsa">RSA</option>
        <option value="hill">Hill Cipher</option>
        <option value="affine">Affine</option>
      </select>
  );
}

export default App
