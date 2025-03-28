interface Props {
  year: string;
}

function PublicationYear({ year }: Props) {
  return (
    <>
      <div id="round_square_grey_gradient">
        <b>
          <p
            style={{
              fontSize: 31,
              color: "rgb(136, 40, 40)",
              float: "left",
              marginRight: 4,
              marginLeft: -10,
              marginTop: -23,
            }}
          >
            {year}
          </p>
        </b>
      </div>
      <br />
    </>
  );
}

export default PublicationYear;
