import "./index.scss";
import match from "../../../../assets/images/match.svg";
import ArsenalImage from "../../../../assets/images/arsenal.png";
import ChelseaImage from "../../../../assets/images/chelsea.png";
import { DropDown } from "../../../../components/ui/dropdown";
import { useEffect, useState } from "react";
import image1 from "../../../../assets/images/leagues/image1.png";
import image2 from "../../../../assets/images/leagues/image2.png";
import image3 from "../../../../assets/images/leagues/image3.png";
import image4 from "../../../../assets/images/leagues/image4.png";
import image5 from "../../../../assets/images/leagues/image5.png";
import image6 from "../../../../assets/images/leagues/image6.png";
import { getLeague, getLeagues } from "../../../../services/leagueService";
import Loader from "../../../../components/loader/Loading";
import moment from "moment";
const Game = ({ icon, name, icon2, name2, goals }) => {
  return (
    <div className="fix__match">
      <div className="fix__match__team" style={{ justifyContent: "end" }}>
        <div className="title">{name}</div>
        <img src={icon} alt="" />
      </div>
      <div className="fix__match__noun">
        <img src={match} alt="" />
        <span>{goals}</span>
      </div>
      <div className="fix__match__team" style={{ justifyContent: "start" }}>
        <img src={icon2} alt="" />
        <div className="title">{name2}</div>
      </div>
    </div>
  );
};

const DATE_FORMAT_TYPE = "dddd D MMMM YYYY";

export function FixturesAuth() {
  const [league, setLeague] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedGameWeek, setSelectedGameWeek] = useState({
    value: 0,
    label: "Matchday 1",
  });

  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    getLeagues().then(({ data }) => {
      setLeagues(data);
      if (data[0]) {
        const { _id } = data[0];
        getLeague(_id).then(({ data: leag }) => {
          setLeague(leag);
          setIsLoading(false);
        });
      }
    });
  }, []);

  const selectLeague = ({ value }) => {
    setIsLoading(true);
    getLeague(value).then(({ data: leag }) => {
      setLeague(leag);
      setSelectedGameWeek({
        value: 0,
        label: "Matchday 1",
      });
      setIsLoading(false);
    });
  };

  // Map through the `leagues` array to create a list of objects with `value`, `label`, and `icon`.
  const list = leagues.map((e) => ({
    value: e._id, // Assign the league ID to the `value` property.
    label: e.leagueName, // Assign the league name to the `label` property.
    icon: e.imageLink, // Assign the league image link to the `icon` property.
  }));

  // Create a `gameWeekList` array from the `league.gameWeeks` object if it exists.
  const gameWeekList = league.gameWeeks
    ? Object.keys(league.gameWeeks).map((e) => ({
        value: e, // Use the game week key as the `value`.
        label: `Matchday ${e * 1 + 1}`, // Format the label as "Matchday X".
      }))
    : []; // If `league.gameWeeks` doesn't exist, set an empty array.

  // Get the selected `gameWeek` based on the `selectedGameWeek` value if `league.gameWeeks` exists.
  const gameWeek = league.gameWeeks
    ? league.gameWeeks[selectedGameWeek.value / 1] // Convert `selectedGameWeek.value` to a number and use it as the key.
    : {}; // If `league.gameWeeks` doesn't exist, use an empty object.

  // Extract the `fixturesStandings` from the selected `gameWeek`.
  const games = gameWeek.fixturesStandings;

  // Sort the `games` array by the `lastUpdatedAt` field if `games` exists.
  const data = games
    ? games.sort(
        (a, b) => new Date(a.lastUpdatedAt) - new Date(b.lastUpdatedAt) // Compare the dates in ascending order.
      )
    : []; // If `games` is undefined, set an empty array.

  // Group the `data` array by day and time.
  const groupedByDay = data.reduce((result, item) => {
    // Extract the date and time portions from the `utcDate` field.
    const date = item.utcDate.split("T"); // Split the `utcDate` string into date and time.
    const day = date[0] + "&" + date[1].slice(0, 5); // Format as "YYYY-MM-DD&HH:mm".

    // Initialize an array for the day if it doesn't already exist in `result`.
    if (!result[day]) {
      result[day] = [];
    }

    // Push the current item into the array for the respective day.
    result[day].push(item);

    return result; // Return the updated result object for the next iteration.
  }, {}); // Start with an empty object as the initial value.

  return (
    <div className="fix">
      {isLoading && (
        <div className="fix__loading">
          <div className="loader">
            <Loader />
          </div>
        </div>
      )}
      <div className="container">
        <div className="fix__top">
          <div className="fix__top__title">FIXTURES</div>
          <div className="fix__top__selectors">
            <DropDown
              selectedOption={{
                value: league._id,
                label: league.leagueName,
                icon: league.imageLink,
              }}
              // isHaveIcon={true}
              isHaveIcon={true}
              options={list}
              select={selectLeague}
            />
            <DropDown
              selectedOption={selectedGameWeek}
              select={(e) => setSelectedGameWeek(e)}
              options={gameWeekList}
            />
          </div>
        </div>
        <div className="fix__blocks">
          {Object.keys(groupedByDay).map((e) => {
            console.log(e);
            const item = groupedByDay[e];
            return (
              <div className="fix__block">
                <div className="fix__block__top">
                  <div className="title">
                    {moment(e).format(DATE_FORMAT_TYPE)}
                  </div>
                  <div className="time">{moment(e).format("HH:mm")}</div>
                </div>
                <div className="fix__block__content">
                  {item.map((e) => {
                    return (
                      <Game
                        icon={e.awayTeam.crest}
                        name={e.awayTeam.name}
                        icon2={e.homeTeam.crest}
                        name2={e.homeTeam.name}
                        goals={
                          (e.score.fullTime.away || 0) +
                          ":" +
                          (e.score.fullTime.home || 0)
                        }
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
