import './style.css';

export type UserListed = {
    name: string;
    time: string | number;
}

export function Listed(props: UserListed) {
    return(
        <div className="listed">
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>    
    );
}