import React from "react";
import "./index.css";
import "./animation.css";


export const HeaderTab = (prop) => {
  return <a href="/">{prop.title}</a>;
};

//the upper half of the website that displays the preview
export const CurrentCard = (prop) => {
  if (prop.selCard != null) {
    return (
      <>
        <div id="leftPreview">
          <h1>{prop.selCard.title}</h1>
          <h5>
            created: {prop.selCard.dateCreated}, modified:{" "}
            {prop.selCard.dateModified}
          </h5>
          <p id="prevDesc">{prop.selCard.desc}</p>
        </div>
        <div id="rightPreview">
          <table>
            <tr>
              <th>term</th>
              <th>definition</th>
            </tr>
            {prop.selCard.cards.map((card) => {
              return (
                <tr>
                  <td>{card[0]}</td>
                  <td>{card[1]}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </>
    );
  } else {
    return <h2>no flashcard sets selected</h2>;
  }
};

