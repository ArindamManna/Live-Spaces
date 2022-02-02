function Card(props) {
  return (
    <>
      <div className="card">
        <div className="pic" style={{

        
            background:`url('https://source.unsplash.com/random/700x500?sig=${Math.random()*100}')center center no-repeat` 
        }}/>
        <div className="bottom flex flex-di-co">
          <div className="name">{props.val.name}</div>
          <div className="btn flex flex-di-co flex-jc-c">
              <div className="span">{props.val.span}</div>
              <div className="span2">{props.val.span2}</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
