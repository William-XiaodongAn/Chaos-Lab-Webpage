interface Props {
  number: string;
  imageLink: string;
  title: string;
  link: string;
  citation: string;
}

function PublicationPaper({ number, imageLink, title, link, citation }: Props) {
  return (
    <>
      <div style={{ height: "5rem", width: "56rem" }}>
        <div
          style={{
            float: "left",
            marginLeft: "3.8rem",
            marginTop: "2.2rem",
            fontWeight: "bold",
          }}
        >
          {number}
        </div>
        <div
          style={{
            marginTop: "0.5rem",
            marginLeft: "2rem",
            width: "16%",
            float: "left",
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img
            src={imageLink}
            style={{
              width: "100%",
            }}
          />
        </div>
        <div
          style={{
            textAlign: "left",
            float: "left",
            width: "65%",
            height: "100%",
            wordWrap: "break-word",
          }}
        >
          <div style={{ marginLeft: "2rem", lineHeight: 1.2 }}>
            <b>{title}</b> <p style={{ margin: "0.5rem" }}></p>
            {citation}
          </div>
        </div>

        <a href={link} style={{ color: "inherit" }}>
          <div id="round_square_pdf_button">PDF</div>
        </a>
      </div>
      <br />
      <br />
    </>
  );
}

export default PublicationPaper;
