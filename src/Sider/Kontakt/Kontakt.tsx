import * as React from "react";
import axios from "axios";
import classNames from "classnames";
import "./kontakt.css";

const Kontakt: React.FunctionComponent<{}> = () => {
    const [navn, settNavn] = React.useState("");
    const [epost, settEpost] = React.useState("");
    const [melding, settMelding] = React.useState("");
    const [focus, settFocus] = React.useState(0);

    return (
        <div className={"kontakt"}>
            <p className={"kontakt__ingress"}>
                Fant du ikke svar på det du lette etter eller om du har andre
                spørsmål? Send oss en melding via kontaktskjema her og vi vil
                svare deg så snart vi kan.
            </p>

            <form
                id={"kontaktform"}
                onSubmit={event => {
                    axios.post("/sendmail", {
                        epost,
                        melding,
                        navn
                    });

                    event.preventDefault();
                }}
            >
                <div
                    className={classNames(
                        "fieldcontainer",
                        focus === 1 && "focus"
                    )}
                >
                    <div className={"field"}>
                        <div className={"inputlabel"}>Navn</div>
                        <input
                            className={"textinput"}
                            onFocus={() => settFocus(1)}
                            onBlur={() => settFocus(0)}
                            onChange={event => settNavn(event.target.value)}
                            required
                            type={"text"}
                            value={navn}
                        />
                    </div>
                </div>

                <div
                    className={classNames(
                        "fieldcontainer",
                        focus === 2 && "focus"
                    )}
                >
                    <div className={"field"}>
                        <div className={"inputlabel"}>E-post</div>
                        <input
                            className={"textinput"}
                            onFocus={() => settFocus(2)}
                            onBlur={() => settFocus(0)}
                            onChange={event => settEpost(event.target.value)}
                            pattern=".+@.+"
                            required
                            value={epost}
                        />
                    </div>
                </div>

                <div
                    className={classNames(
                        "fieldcontainer",
                        focus === 3 && "focus"
                    )}
                >
                    <div className={"field"}>
                        <div className={"inputlabel"}>Melding</div>
                        <textarea
                            onFocus={() => settFocus(3)}
                            onBlur={() => settFocus(0)}
                            style={{ marginTop: ".8rem" }}
                            rows={5}
                            className={"textinput"}
                            value={melding}
                            required
                            onChange={event => settMelding(event.target.value)}
                        />
                    </div>
                </div>
            </form>

            <button type="submit" form="kontaktform" value="Send">
                Send inn
            </button>
        </div>
    );
};

export default Kontakt;
