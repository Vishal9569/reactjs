let CurrentTime = () => {
    let date = new Date();
    let showTime = date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds();

    return <div>
        <h2>Current Time - {showTime}</h2>
    </div>
}

export default CurrentTime;