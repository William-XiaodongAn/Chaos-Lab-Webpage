import Menu from "../components/Menu";
import PublicationYear from "../components/PublicationYear";
import PublicationPaper from "../components/PublicationPaper";
import PublicationData from "../data/PublicationData.json";

function Publication() {
  return (
    <>
      <Menu marginTopLength="20px" /> <br />
      {PublicationData.map((item, index) =>
        item.id === "year" ? (
          <PublicationYear key={item.year} year={item.year as string} />
        ) : (
          <PublicationPaper
            key={item.title}
            number={item.number as string}
            imageLink={item.imageLink as string}
            title={item.title as string}
            link={item.link as string}
            citation={item.citation as string}
          />
        )
      )}
      <br />
    </>
  );
}

export default Publication;
