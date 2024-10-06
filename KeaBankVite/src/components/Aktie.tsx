

function Aktie(props: AktieProps)
{
    return(
    <div className="aktie">
        <p>selskab: {props.navn}</p>
        <p>ticker: {props.ticker.toUpperCase()}</p>
        <p>værdi: {props.værdi}</p>
        <p>antal: {props.antal}</p>
        <p>total værdi: {props.værdi * props.antal}</p>
    </div>
    );
}

interface AktieProps {
    navn: string;
    ticker: string;
    værdi: number;
    antal: number;
  }

export default Aktie;