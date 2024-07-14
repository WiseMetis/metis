import { Team } from "../types/Team";

function func1(teamA: Team, teamB: Team): number {
    // The math module contains a function
    // named toRadians which converts from
    // degrees to radians.
    const lon1 = (teamA.longitude * Math.PI) / 180;
    const lon2 = (teamB.longitude * Math.PI) / 180;
    const lat1 = (teamA.latitude * Math.PI) / 180;
    const lat2 = (teamB.latitude * Math.PI) / 180;

    // Haversine formula
    const dlon = lon2 - lon1;
    const dlat = lat2 - lat1;
    const a =
        Math.pow(Math.sin(dlat / 2), 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

    const c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in kilometers. Use 3956
    // for miles
    const r = 6371;

    // calculate the result
    return c * r;
}

export function createTeamMap(teams: Team[]): Map<string, Map<string, number>> {
    const teamMap = new Map<string, Map<string, number>>();

    teams.forEach((team) => {
        const otherTeamsMap = new Map<string, number>();

        teams.forEach((otherTeam) => {
            if (team.team !== otherTeam.team) {
                otherTeamsMap.set(otherTeam.team, func1(team, otherTeam));
            }
        });

        teamMap.set(team.team, otherTeamsMap);
    });

    return teamMap;
}

// Example usage:
export const teams: Team[] = [
    { team: "Michigan", latitude: 42.26586873, longitude: -83.74872565 },
    { team: "Penn State", latitude: 40.81215273, longitude: -77.85620213 },
    { team: "Ohio State", latitude: 40.00168569, longitude: -83.01972806 },
    { team: "Texas A&M", latitude: 30.61009758, longitude: -96.34072923 },
    { team: "Tennessee", latitude: 35.95473437, longitude: -83.92533302 },
    { team: "LSU", latitude: 30.4120124, longitude: -91.18381977 },
    { team: "Alabama", latitude: 33.20748994, longitude: -87.55039215 },
    { team: "Texas", latitude: 30.2836034, longitude: -97.73233652 },
    { team: "Southern California", latitude: 34.01400974, longitude: -118.2878959 },
    { team: "Georgia", latitude: 33.94982149, longitude: -83.3734417 },
    { team: "UCLA", latitude: 34.16156959, longitude: -118.1676149 },
    { team: "Florida", latitude: 29.64986868, longitude: -82.34866619 },
    { team: "Auburn", latitude: 32.60236167, longitude: -85.48891068 },
    { team: "Nebraska", latitude: 40.82048352, longitude: -96.70571566 },
    { team: "Florida State", latitude: 30.43754758, longitude: -84.30453398 },
    { team: "Oklahoma", latitude: 35.20589959, longitude: -97.44255066 },
    { team: "Clemson", latitude: 34.67874666, longitude: -82.8431797 },
    { team: "Notre Dame", latitude: 41.69842312, longitude: -86.23382449 },
    { team: "Wisconsin", latitude: 43.06993803, longitude: -89.41274643 },
    { team: "South Carolina", latitude: 33.97259115, longitude: -81.02021635 },
    { team: "Michigan State", latitude: 42.72816912, longitude: -84.48487535 },
    { team: "Arkansas", latitude: 36.06785079, longitude: -94.17879581 },
    { team: "Arizona State", latitude: 33.426364, longitude: -111.932616 },
    { team: "Missouri", latitude: 38.9358953, longitude: -92.33311415 },
    { team: "Iowa", latitude: 41.65838894, longitude: -91.55147552 },
    { team: "Washington", latitude: 47.65043054, longitude: -122.3029198 },
    { team: "Pittsburgh", latitude: 40.44678377, longitude: -80.01575589 },
    { team: "Virginia Tech", latitude: 37.21997428, longitude: -80.41805506 },
    { team: "Miami", latitude: 25.95793374, longitude: -80.23884058 },
    { team: "BYU", latitude: 40.257488, longitude: -111.654439 },
    { team: "North Carolina", latitude: 35.90698835, longitude: -79.04791832 },
    { team: "California", latitude: 37.8706866, longitude: -122.2507095 },
    { team: "Kentucky", latitude: 38.02262168, longitude: -84.50520515 },
    { team: "Iowa State", latitude: 42.01400541, longitude: -93.63580942 },
    { team: "Virginia", latitude: 38.03112373, longitude: -78.51370811 },
    { team: "Mississippi State", latitude: 33.4562306, longitude: -88.79342437 },
    { team: "Texas Tech", latitude: 33.5910283, longitude: -101.8729377 },
    { team: "Illinois", latitude: 40.09930573, longitude: -88.23598623 },
    { team: "Mississippi", latitude: 34.3621543, longitude: -89.53414626 },
    { team: "Oklahoma State", latitude: 36.12570866, longitude: -97.06650496 },
    { team: "West Virginia", latitude: 39.65221992, longitude: -79.9551753 },
    { team: "NC State", latitude: 35.80075968, longitude: -78.71948719 },
    { team: "Purdue", latitude: 40.434323, longitude: -86.918485 },
    { team: "Georgia Tech", latitude: 33.77255692, longitude: -84.39285278 },
    { team: "Louisville", latitude: 38.20542169, longitude: -85.75810562 },
    { team: "Oregon", latitude: 44.05827272, longitude: -123.0685043 },
    { team: "Indiana", latitude: 39.18090913, longitude: -86.52557373 },
    { team: "Minnesota", latitude: 44.97652497, longitude: -93.22457582 },
    { team: "Rutgers", latitude: 40.51378289, longitude: -74.46504457 },
    { team: "Arizona", latitude: 32.22834023, longitude: -110.9490395 },
    { team: "Maryland", latitude: 38.99120275, longitude: -76.94731173 },
    { team: "Colorado", latitude: 40.00939837, longitude: -105.2668869 },
    { team: "Kansas", latitude: 38.96294599, longitude: -95.246315 },
    { team: "Kansas State", latitude: 39.20186362, longitude: -96.59379244 },
    { team: "Stanford", latitude: 37.43472641, longitude: -122.1610165 },
    { team: "Syracuse", latitude: 43.03613282, longitude: -76.13651991 },
    { team: "Northwestern", latitude: 42.06539967, longitude: -87.69249558 },
    { team: "Oregon State", latitude: 44.55947684, longitude: -123.2814074 },
    { team: "UCF", latitude: 28.60795886, longitude: -81.19299889 },
    { team: "Baylor", latitude: 31.55866264, longitude: -97.11560011 },
    { team: "Utah", latitude: 40.75994782, longitude: -111.848824 },
    { team: "TCU", latitude: 32.70991597, longitude: -97.36799598 },
    { team: "Boston College", latitude: 42.33510835, longitude: -71.16647243 },
    { team: "Vanderbilt", latitude: 36.1435585, longitude: -86.80877209 },
    { team: "Cincinnati", latitude: 39.13128425, longitude: -84.51626144 },
    { team: "Houston", latitude: 29.72176796, longitude: -95.34909841 },
    { team: "Duke", latitude: 35.99531665, longitude: -78.9417243 },
    { team: "Washington State", latitude: 46.73196798, longitude: -117.1605858 },
    { team: "SMU", latitude: 32.83771581, longitude: -96.78270578 },
    { team: "Wake Forest", latitude: 36.09183481, longitude: -80.25534153 },
];

const result = createTeamMap(teams);
console.log(result);
