import { useState } from "react";
import { dbService } from "../fbase";

function Home() {
  const [cweet, setCweet] = useState("");
  
  const handleOnChange = (e) => {
    const {target : {value},} = e;
    setCweet(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dbService.collection("cweets").add({
      cweet,
      createdAt: Date.now(),
    });
    setCweet("");
  }
  return (
    <>
      <h2>Cwitter</h2>
      <div>
        <form onSubmit={onSubmit} >
          <input type="text" value={cweet} placeholder="What's going on?" maxLength={99} onChange={handleOnChange} />
          <input type="submit" value="Cweet"/>
        </form>
      </div>
    </>
  )
}

export default Home;