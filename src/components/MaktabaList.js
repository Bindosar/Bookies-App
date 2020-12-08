import { useState } from "react";
import { observer } from "mobx-react";
// Styles
import { Title } from "../style";

import MaktabaItem from "./MaktabaItem";

const MaktabaList = () => {
  const [query, setQuery] = useState("");

  const maktabaList = maktabaStore.maktabas
    .filter(maktaba)
    .map((maktaba) => <MaktabaItem maktaba={maktaba} key={maktaba.id} />);
  return (
    <div className="container">
      <Title>Maktabas</Title>
    </div>
  );
};

export default observer(MaktabaList);
