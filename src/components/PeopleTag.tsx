interface Props {
  photo: string;
  name: string;
  title: string;
  cvLink: string;
  moreInfo: string;
  email: string;
  office: string;
}

function PeopleTag({
  photo,
  name,
  title,
  cvLink,
  moreInfo,
  email,
  office,
}: Props) {
  return (
    <>
      <div
        id="round_square_meat"
        style={{
          maxWidth: 1000,
          width: "80%",
          minHeight: "clamp(220px, 80vh, 350px)",
          borderRadius: 20,
          backgroundColor: "white",
          padding: 0,
        }}
      >
        <div
          style={{
            backgroundColor: "#989898",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            textAlign: "left",
            fontSize: 24,
            fontWeight: 800,
            color: "white",
            paddingTop: 5,
            paddingBottom: 5,
          }}
        >
          &nbsp; &nbsp; &nbsp; &nbsp; Principle Investigator{" "}
        </div>{" "}
        <div
          style={{
            width: "30%",
            float: "left",
            textAlign: "left",
            lineHeight: 1.2,
          }}
        >
          <img
            src={photo}
            style={{ margin: "20px 0px 0px 40px", width: "60%" }}
          />
          <div
            style={{
              width: "60%",
              color: "black",
              fontSize: "clamp(5px, 1vw, 12px)",
              marginLeft: 40,
              fontStyle: "italic",
              whiteSpace: "nowrap",
            }}
          >
            <br />
            Email: {email}
            <br />
            office: {office}
          </div>
        </div>
        <div
          style={{
            width: "70%",
            float: "right",
            textAlign: "left",
            color: "black",
            padding: "20px 0px 60px 50px",
            fontFamily: "Calibri",
            fontSize: "clamp(12px, 2vw, 22px)",
            fontWeight: 500,
            lineHeight: 1.2,
          }}
        >
          {name}
          <br />
          {title}
          <br />
          <br />
          <br />
          <a href={cvLink}>CV.pdf (in GT formatted style)</a> <br />
          More info about me: {moreInfo}
        </div>
      </div>
      <br />
    </>
  );
}

export default PeopleTag;
