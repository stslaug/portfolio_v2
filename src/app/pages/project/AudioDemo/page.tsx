import "./audio-demo.css";

// todo fix;

export default function AudioDemo() {
    return (
        <main>
            <section className = "sidebar">
                <div className = "container" id = "functions">
                    <h1>Audio Demo</h1>


                    <audio id = "audio" src = "audio.mp3"></audio>
                    <p id = "fileName">Audio File Not Found or Error Occured </p>
                    <div id = "title-controls">
                        <p><i className = "fa-solid fa-clock-rotate-left fa" id = "prevBtn"></i></p>
                        <p><i className = "fa-solid fa-play fa" id = "playPauseBtn"></i></p>
                        <p><i className = "fa-solid fa-clock-rotate-left fa-flip-horizontal  fa" id = "fwdBtn"></i>
                        </p>
                        <div id = "volume-controls">
                            <label htmlFor = "volumeControl"><i className = "fa-solid fa-volume-off"></i></label>
                            <input id = "volumeControl" max = "1" min = "0" step = "0.01" type = "range" value = "1"/>
                            <label htmlFor = "volumeControl"><i className = "fa-solid fa-volume-high"></i></label>
                        </div>
                    </div>

                    <div id = "time-controls">

                        <i id = "currentTime">0:00</i>


                        <label htmlFor = "progressBar"></label><input id = "progressBar" max = "375" min = "0" step = "0.01" type = "range" value = "0"/>


                        <span id = "duration">0:00</span>
                    </div>
                </div>

                <div className = "container" id = "titleCreate">
                    <h2>Create a title bookmark!</h2>
                    <form id = "createTitle">
                        <div id = "titleCreateInfo">

                            <div className = "input-group">
                                <label htmlFor = "newTitle">Title</label>
                                <input className = "input" id = "newTitle" placeholder = "Enter a title" type = "text"/>
                            </div>

                            <div className = "input-group">
                                <label htmlFor = "timeSelect">Time</label>
                                <input className = "input" id = "timeSelect" placeholder = "ex. 1:45 or 105" type = "text"/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor = "timestamp"><i className = "fa-solid fa-clock"></i>0:00</label>
                            <input id = "timestamp" max = "375" min = "0" step = "1" type = "range" value = "0"/>

                        </div>

                        <input className = "btn" id = "createTitleBtn" type = "submit" value = "Create Title At: 0:00"/>
                    </form>
                    <button className = "btn" id = "popDataBtn">Add 50 example titles</button>
                </div>
            </section>
            <section className = "page-side" id = "titles">
                <h1 id = "titleCount"></h1>
                <table className = "table">
                    <thead>
                    <tr>
                        <th className = "title-column">Title</th>
                        <th className = "time-column">Time Stamp</th>
                        <th>Controls</th>
                    </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>

            </section>
        </main>

    );
}