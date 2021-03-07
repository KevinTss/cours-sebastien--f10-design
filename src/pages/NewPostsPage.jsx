import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import ActionLayout from "../components/ActionLayout";

const browsers = ["Chrome", "Edge", "Firefox", "Safari", "Opera", "Other"];

const PostsPage = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [focusName, setFocusName] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [focusFirstName, setFocusFirstName] = useState(false);
  const [validFirstName, setValidFirstName] = useState(false);
  const [gender, setGender] = useState("");
  // const [validGender, setValidGender] = useState(false);
  const [email, setEmail] = useState("");
  const [focusEmail, setFocusEmail] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [phone, setPhone] = useState("");
  const [focusPhone, setFocusPhone] = useState(false);
  const [validPhone, setValidPhone] = useState(false);
  const [browserList, setBrowserList] = useState([]);
  const [subscription, setSubscription] = useState("DEFAULT");
  const [validSubscription, setValidSubscription] = useState(false);
  const [comments, setComments] = useState("");

  const [optionsFree, setOptionsFree] = useState("free-options");
  const [optionsBasic, setOptionsBasic] = useState("basic-options");
  const [optionsPremium, setOptionsPremium] = useState("premium-options");

  const [validField, setValidField] = useState("invalidField");
  const [validSubmit, setValidSubmit] = useState(false);

  let selectSubscriptionValue = subscription || "DEFAULT";

  const handleSubmit = () => {
    history.push("/posts");
  };

  const regexCheck = (regex, content, setValidContent) => {
    let result = regex.test(content);
    setValidContent(result);
    setValidField(result ? "" : "invalidField");
  };

  const updateBrowserList = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setBrowserList((prevState) => [...prevState, name]);
    } else {
      setBrowserList(browserList.filter((item) => item !== name));
    }
  };

  useEffect(() => {
    if (subscription !== "DEFAULT") {
      setValidSubscription(true);
    }
  }, [subscription]);

  useEffect(() => {
    switch (subscription) {
      case "Free":
        setOptionsFree("");
        setOptionsBasic("basic-options");
        setOptionsPremium("premium-options");
        break;
      case "Basic":
        setOptionsFree("free-options");
        setOptionsBasic("");
        setOptionsPremium("premium-options");
        break;
      case "Premium":
        setOptionsFree("free-options");
        setOptionsBasic("basic-options");
        setOptionsPremium("");
        break;

      default:
        break;
    }
  }, [subscription]);

  useEffect(() => {
    const regex = /^[A-zÀ-ú][A-zÀ-ú' '-]{1,28}[A-zÀ-ú]$/;
    regexCheck(regex, name, setValidName);
  }, [name]);

  useEffect(() => {
    const regex = /^[A-zÀ-ú][A-zÀ-ú' '-]{1,28}[A-zÀ-ú]$/;
    regexCheck(regex, firstName, setValidFirstName);
  }, [firstName]);

  useEffect(() => {
    const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    // Simple email expression
    // Matches >> joe@aol.com | ssmith@aspalliance.com | a@b.cc
    // Non-Matches >> joe@123aspx.com | joe@web.info | joe@company.co.uk
    // https://www.regexlib.com/REDetails.aspx?regexp_id=16
    regexCheck(regex, email, setValidEmail);
  }, [email]);

  useEffect(() => {
    const regex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    // French phone
    // Matches >> +33 6 22 19 59 48 | +33622195948 | 0622195948 | 06 22 19 59 48
    regexCheck(regex, phone, setValidPhone);
  }, [phone]);

  useEffect(() => {
    if (subscription === "DEFAULT") {
      setValidSubscription(false);
    } else {
      setValidSubscription(true);
    }
  }, [subscription]);

  useEffect(() => {
    if (validName && validFirstName && validEmail && validPhone && validSubscription) {
      setValidSubmit(true);
      console.log("valid submit");
    }
  }, [validName, validFirstName, validEmail, validPhone, validSubmit, validSubscription]);

  return (
    <ActionLayout>
      <div className="register">
        <form method="GET" id="my_form" onSubmit={handleSubmit}>
          <h1>Create new post</h1>
          <table id="register-table">
            <tbody>
              <tr>
                <td className="stable tdKey">
                  <label>Name*</label>
                </td>
                <td className="stable">
                  <input
                    className={`txtInput ${validName ? "" : "invalidField"}`}
                    required
                    type="text"
                    value={name}
                    placeholder="Doe"
                    onFocus={() => setFocusName(true)}
                    onBlur={() => setFocusName(false)}
                    onChange={(e) => {
                      e.preventDefault();
                      setName(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td className="hiddenContent"></td>
                {focusName && !validName && (
                  <td className="invalidMessage">
                    3 to 30 characters including letters (a-z, A-Z), space (' ') or dash (-)
                  </td>
                )}
              </tr>

              <tr>
                <td className="stable tdKey">
                  <label>First Name*</label>
                </td>
                <td className="stable">
                  <input
                    className={`txtInput ${validFirstName ? "" : "invalidField"}`}
                    required
                    type="text"
                    value={firstName}
                    placeholder="John"
                    onFocus={() => setFocusFirstName(true)}
                    onBlur={() => setFocusFirstName(false)}
                    onChange={(e) => {
                      e.preventDefault();
                      setFirstName(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td className="hiddenContent"></td>
                {focusFirstName && !validFirstName && (
                  <td className="invalidMessage">
                    3 to 30 characters including letters (a-z, A-Z), space (' ') or dash (-)
                  </td>
                )}
              </tr>

              <tr>
                <td className="stable tdKey">Gender</td>
                <td className="stable">
                  <input
                    className="radioInputf"
                    // required
                    type="radio"
                    value="male"
                    id="male"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                    name="gender"
                  />
                  <label className="radio-label" htmlFor="male">
                    Male
                  </label>

                  <input
                    className="radioInpdut"
                    type="radio"
                    value="female"
                    id="female"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                    name="gender"
                  />
                  <label className="radio-label" htmlFor="female">
                    Female
                  </label>
                </td>
              </tr>

              <tr>
                <td className="stable tdKey">
                  <label>Email*</label>
                </td>
                <td className="stable">
                  <input
                    className={`txtInput ${validEmail ? "" : "invalidField"}`}
                    required
                    type="email"
                    value={email}
                    placeholder="JohnDoe@example.com"
                    onFocus={() => setFocusEmail(true)}
                    onBlur={() => setFocusEmail(false)}
                    onChange={(e) => {
                      e.preventDefault();
                      setEmail(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td className="hiddenContent"></td>
                {focusEmail && !validEmail && (
                  <td className="invalidMessage">
                    Valid email including alphanumerics (A-z, 0-9), dot (@) and point (.)
                  </td>
                )}
              </tr>

              <tr>
                <td className="stable tdKey">
                  <label>Phone*</label>
                </td>
                <td className="stable">
                  <input
                    className={`txtInput ${validPhone ? "" : "invalidField"}`}
                    required
                    type="tel"
                    value={phone}
                    placeholder="+33/0 5 10 10 10 10"
                    onFocus={() => setFocusPhone(true)}
                    onBlur={() => setFocusPhone(false)}
                    onChange={(e) => {
                      e.preventDefault();
                      setPhone(e.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td className="hiddenContent"></td>
                {focusPhone && !validPhone && (
                  <td className="invalidMessage">
                    French phone number starting with +33 or 0 including numerics (0-9) and spaces (' ')
                  </td>
                )}
              </tr>

              <tr>
                <td className="stable tdKey">
                  <label>Browser(s) used</label>
                </td>
                <td className="stable">
                  {browsers.map((browser) => (
                    <label className="checkbox-label">
                      <input type="checkbox" name={browser} onChange={updateBrowserList} />
                      {browser}
                    </label>
                  ))}
                </td>
              </tr>

              <tr>
                <td className="stable tdKey">
                  <label>Subscription*</label>
                </td>
                <td className="stable">
                  <select
                    value={selectSubscriptionValue}
                    className={`${validSubscription ? "" : "invalidField"}`}
                    required
                    onChange={(e) => {
                      e.preventDefault();
                      setSubscription(e.target.value);
                    }}
                  >
                    <option value="DEFAULT" disabled>
                      Select one
                    </option>
                    <option value="Free">Free</option>
                    <option value="Basic">Basic</option>
                    <option value="Premium">Premium</option>
                  </select>
                </td>
              </tr>

              {validSubscription && (
                <tr>
                  <td className="tdKey">Options</td>
                  <td className="stable">
                    <table id="optionsTable">
                      <tr>
                        <th></th>
                        <th className={`${optionsFree} align-content`}>Free</th>
                        <th className={`${optionsBasic} align-content`}>Basic</th>
                        <th className={`${optionsPremium} align-content`}>Premium</th>
                      </tr>
                      <tr>
                        <td>Monthly cost* (United States Dollar)</td>
                        <td className={`${optionsFree} align-content`}>
                          <strong>$0</strong>
                        </td>
                        <td className={`${optionsBasic} align-content`}>$13.99</td>
                        <td className={`${optionsPremium} align-content`}>$17.99</td>
                      </tr>
                      <tr>
                        <td>Number of screens you can watch on at the same time</td>
                        <td className={`${optionsFree} align-content`}>1</td>
                        <td className={`${optionsBasic} align-content`}>2</td>
                        <td className={`${optionsPremium} align-content`}>4</td>
                      </tr>
                      <tr>
                        <td>Unlimited movies and TV shows</td>
                        <td className={`${optionsFree} align-content green`}>✔</td>
                        <td className={`${optionsBasic} align-content green`}>✔</td>
                        <td className={`${optionsPremium} align-content green`}>✔</td>
                      </tr>
                      <tr>
                        <td>HD available</td>
                        <td className={`${optionsFree} align-content red`}>✘</td>
                        <td className={`${optionsBasic} align-content green`}>✔</td>
                        <td className={`${optionsPremium} align-content green`}>✔</td>
                      </tr>
                      <tr>
                        <td>Ultra HD available</td>
                        <td className={`${optionsFree} align-content red`}>✘</td>
                        <td className={`${optionsBasic} align-content red`}>✘</td>
                        <td className={`${optionsPremium} align-content green`}>✔</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              )}

              <tr>
                <td className="tdKey">
                  <label>Comments</label>
                </td>
                <td className="stable">
                  <textarea
                    value={comments}
                    placeholder="Comments in a few words"
                    onChange={(e) => {
                      e.preventDefault();
                      setComments(e.target.value);
                    }}
                  ></textarea>
                </td>
              </tr>

              <tr>
                <td></td>
                <td>
                  <br />
                  {validSubmit && <button className="submitButton">Submit</button>}
                  {!validSubmit && <button disabled>Submit</button>}
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <br />
        Name {">"}
        {">"} {name}
        <br />
        FirstName {">"}
        {">"} {firstName}
        <br />
        Gender {">"}
        {">"} {gender}
        <br />
        Email {">"}
        {">"} {email}
        <br />
        Phone {">"}
        {">"} {phone}
        <br />
        Browser List {">"}
        {">"}{" "}
        {browserList.map((item) => (
          <span>{`${item}	\u00A0`}</span>
        ))}
        <br />
        subscription {">"}
        {">"} {subscription}
        <br />
        Comments {">"}
        {">"} {comments}
        <br />
        <br />
      </div>
    </ActionLayout>
  );
};

export default PostsPage;
