export default function Events() {

    const events = [{
        id: 1, title: "Test 1", date: Date.now(), location: "Test Room A"
    }, {
        id: 2, title: "Test 2", date: Date.now(), location: "Test Room AB"
    }, {
        id: 3, title: "Test 3", date: Date.now(), location: "Test Room C"
    }];

    return (<aside>
        <h1>Events</h1>

        <div>
            <div>
                <h3>{events[0].title}</h3>
                <p>{events[0].date}</p>
                <p>{events[0].location}</p>
            </div>
            <div>
                <h3>{events[1].title}</h3>
                <p>{events[1].date}</p>
                <p>{events[1].location}</p>
            </div>
            <div>
                <h3>{events[2].title}</h3>
                <p>{events[2].date}</p>
                <p>{events[2].location}</p>
            </div>
        </div>
    </aside>);
}