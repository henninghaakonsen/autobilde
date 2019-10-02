import * as React from "react";
import axios from "axios";
import classNames from "classnames";
import "./kontakt.css";

enum statuser {
    "INITIAL",
    "SENDER",
    "FEILET",
    "SUKSESS"
}

const Kontakt: React.FunctionComponent<{}> = () => {
    const [navn, settNavn] = React.useState("");
    const [telefon, settTelefon] = React.useState("");
    const [epost, settEpost] = React.useState("");
    const [melding, settMelding] = React.useState("");
    const [status, settStatus] = React.useState(statuser.INITIAL);
    const [focus, settFocus] = React.useState(0);

    const settSendingStatus = (status: statuser, timeout?: number) => {
        settStatus(status);

        if (timeout) {
            setTimeout(() => {
                settStatus(statuser.INITIAL);
            }, 5000);
        }
    };
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
                    settSendingStatus(statuser.SENDER);

                    axios
                        .post("/sendmail", {
                            epost,
                            telefon,
                            melding,
                            navn
                        })
                        .then(() => {
                            settNavn("");
                            settTelefon("");
                            settEpost("");
                            settMelding("");
                            settSendingStatus(statuser.SUKSESS, 5000);
                        })
                        .catch(() => {
                            settSendingStatus(statuser.FEILET);
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
                        <div className={"inputlabel"}>Telefon</div>
                        <input
                            className={"textinput"}
                            onFocus={() => settFocus(2)}
                            onBlur={() => settFocus(0)}
                            onChange={event => settTelefon(event.target.value)}
                            type={"text"}
                            value={telefon}
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
                        <div className={"inputlabel"}>E-post</div>
                        <input
                            className={"textinput"}
                            onFocus={() => settFocus(3)}
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
                        focus === 4 && "focus"
                    )}
                >
                    <div className={"field"}>
                        <div className={"inputlabel"}>Melding</div>
                        <textarea
                            onFocus={() => settFocus(4)}
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

            {status === statuser.FEILET && (
                <div style={{ color: "red", padding: "1rem 0" }}>
                    Sending feilet!
                </div>
            )}

            {status === statuser.SENDER && (
                <div style={{ padding: "1rem 0" }}>Sender melding...</div>
            )}

            {status === statuser.SUKSESS && (
                <div style={{ color: "green", padding: "1rem 0" }}>
                    Melding sendt!
                </div>
            )}

            <button type="submit" form="kontaktform" value="Send">
                Send inn
            </button>
        </div>
    );
};

export default Kontakt;
