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
      <div
        style={{
          maxHeight: "6rem",

          width: "95%",
          maxWidth: "56rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          whiteSpace: "nowrap",
          marginLeft: "clamp(1rem, 5vw, 3rem)",
        }}
      >
        {/* Number */}
        <div
          style={{
            minWidth: "3.8rem",
            fontWeight: "bold",
            fontSize: "clamp(16px, 2vw, 22px)",
          }}
        >
          {number}
        </div>

        {/* Image container */}
        <div
          style={{
            marginLeft: "-1rem",
            minWidth: "16%",
            maxWidth: "16%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={imageLink}
            style={{
              width: "100%",
              minWidth: "80px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Paper description */}
        <div
          style={{
            textAlign: "left",
            float: "left",
            width: "65%",
            wordWrap: "break-word",
          }}
        >
          <div
            style={{
              lineHeight: "clamp(5px, 1.5vw, 25px)",
              whiteSpace: "normal",
              fontSize: "clamp(5px, 1.2vw, 22px)",
            }}
          >
            <b>{title}</b>
            <p
              style={{
                margin: "0.5rem 0",
              }}
            >
              {citation}
            </p>{" "}
          </div>
        </div>

        <a href={link} style={{ color: "inherit" }}>
          <div id="round_square_pdf_button">PDF</div>
        </a>
      </div>
      <div
        style={{
          height: "clamp(0.2rem, 10vh, 5rem)",
        }}
      />
    </>
  );
}

export default PublicationPaper;
