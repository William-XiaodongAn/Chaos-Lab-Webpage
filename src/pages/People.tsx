import Menu from "../components/Menu";
import PeopleTag from "../components/PeopleTag";

function People() {
  return (
    <>
      <Menu marginTopLength="20px" />
      <br />
      <img src=" images/people1.png" />
      <br />
      <br />
      <PeopleTag
        photo="images/people2.png"
        name="Flavio"
        title="Professor"
        cvLink="https://google.com"
        moreInfo="NA"
        email="Flavio.Fenton[at]physics.gatech.edu"
        office="204 Howey Building"
      />

      <PeopleTag
        photo="images/people2.png"
        name="Flavio"
        title="Professor"
        cvLink="https://google.com"
        moreInfo="NA"
        email="Flavio.Fenton[at]physics.gatech.edu"
        office="204 Howey Building"
      />
    </>
  );
}

export default People;
