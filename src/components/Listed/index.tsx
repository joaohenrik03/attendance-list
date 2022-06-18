import './style.css';

type Listed = {
    name: string;
    time: string | number;
}

export function Listed(props: Listed) {
    return(
        <div className="listed">
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>    
    );
}