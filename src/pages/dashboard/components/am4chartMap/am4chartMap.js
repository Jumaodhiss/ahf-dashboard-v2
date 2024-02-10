import React, { Component } from 'react';

import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
//import proj4 from "proj4";
import worldMap from "@highcharts/map-collection/custom/world.geo.json";

import s from './am4chartMap.module.scss';

highchartsMap(Highcharts); // Initialize the map module

/**if (typeof window !== "undefined") {
  window.proj4 = window.proj4 || proj4;
}**/

const mapOptions = {
  chart: {
    map: worldMap
  },
  title: {
    text: 'HIV/AIDs Prevelence'
  },
  mapNavigation: {
    enabled: true,
    buttonOptions: {
      alignTo: "spacingBox"
    }
  },
  colorAxis: {
    min: 0
  },
  series: [
    {
      name: "HIV/AIDs Prevelence",
      states: {
        hover: {
          color: "#BADA55"
        }
      },
      dataLabels: {
        enabled: true,
        format: "{point.code}"
      },
      allAreas: false,
      data: [
        ["ls", 24.10],
        ["bw", 22.60],
        ["zw", 22.10],
        ["za", 14.00],
        ["na", 13.20],
        ["zm", 12.50],
        ["mz", 12.20],
        ["mw", 11.40],
        ["gq", 7.66],
        ["tz", 5.10],
        ["ke", 5.10],
        ["ug", 5.00],
        ["tg", 5.20],
        ["cm", 4.00],
        ["ga", 3.90],
        ["cf", 4.00],
        ["gw", 3.65],
        ["cg", 3.77],
        ["bb", 3.10],
        ["vc", 3.00],
        ["rw", 2.90],
        ["ci", 2.70],
        ["ss", 2.40],
        ["gm", 2.40],
        ["ht", 2.20],
        ["ng", 2.10],
        ["bz", 1.90],
        ["ao", 2.10],
        ["gh", 1.80],
        ["bs", 1.80],
        ["jm", 1.65],
        ["ru", 1.50],
        ["lr", 1.50],
        ["sl", 1.50],
        ["gn", 1.40],
        ["gy", 1.40],
        ["sr", 1.30],
        ["dj", 1.50],
        ["bi", 1.20],
        ["td", 1.20],
        ["ml", 1.20],
        ["tt", 1.20],
        ["th", 1.16],
        ["et", 1.10],
        ["ua", 1.10],
        ["br", 1.50],
        ["bj", 1.00],
        ["do", 2.80],
        ["pg", 0.90],
        ["cv", 0.80],
        ["pa", 1.30],
        ["mm", 0.80],
        ["bf", 0.80],
        ["cd", 0.70],
        ["ge", 0.70],
        ["lv", 0.70],
        ["kh", 1.10],
        ["ve", 0.60],
        ["md", 1.10],
        ["er", 0.60],
        ["sv", 0.60],
        ["uy", 1.10],
        ["mr", 0.50],
        ["cl", 1.70],
        ["gt", 0.50],
        ["py", 1.10],
        ["pt", 1.60],
        ["ne", 0.40],
        ["my", 0.30],
        ["id", 0.40],
        ["hn", 0.40],
        ["cu", 1.10],
        ["cr", 0.40],
        ["co", 0.40],
        ["ar", 0.65],
        ["by", 1.00],
        ["sn", 2.30],
        ["us", 0.90],
        ["bo", 0.40],
        ["fr", 0.90],
        ["mx", 0.40],
        ["ec", 0.30],
        ["pe", 0.30],
        ["it", 1.80],
        ["la", 0.30],
        ["es", 0.70],
        ["tj", 0.30],
        ["vn", 0.70],
        ["am", 0.20],
        ["in", 0.02],
        ["kz", 0.40],
        ["kg", 0.20],
        ["lt", 0.45],
        ["mg", 0.20],
        ["np", 0.40],
        ["ph", 0.25],
        ["de", 0.25],
        ["ca", 0.21],
        ["nl", 0.50],
        ["ni", 0.20],
        ["sd", 0.20],
        ["se", 0.20],
        ["ch", 0.20],
        ["gb", 1.10],
        ["bt", 0.16],
        ["ie", 0.55],
        ["gl", 0.13],
        ["no", 0.45],
        ["dk", 0.11],
        ["al", 0.10],
        ["au", 0.10],
        ["fj", 0.10],
        ["tw", 0.10],
        ["az", 0.10],
        ["ir", 0.10],
        ["so", 0.10],
        ["ma", 0.10],
        ["pk", 0.10],
        ["bd", 0.00],
        ["eg", 0.00],
        ["ye", 0.00],
        ["af", 0.00],
        ["lk", 0.00],
        ["bg", 0.00],
        ["tn", 0.00],
        ["rs", 0.04],
        ["hr", 0.14],
        ["cn", 0.09],
        ["mt", 0.09],
        ["lb", 0.06],
        ["cz", 0.05],
        ["me", 0.12],
        ["dz", 0.03],
        ["sa", 0.02],
        ["ba", 0.01],
        ["xk", 0.00],
        ["tm", 0.00],
        ["gd", 0.00],
        ["ag", 0.00],
        ["tc", 0.00],
        ["ws", 0.00],
        ["dm", 0.00],
        ["iq", 0.24],
        ["ae", 0.20],
        ["tl", 0.00],
        ["fi", 0.40],
        ["sj", 0.00],
        ["ki", 0.00],
        ["kn", 0.00],
        ["mu", 0.16],
        ["sg", 0.19],
        ["hk", 0.16],
        ["pw", 0.00],
        ["to", 0.00],
        ["jp", 0.02],
        ["pr", 0.00],
        ["bn", 0.00],
        ["km", 0.00],
        ["nu", 0.00],
        ["sc", 0.00],
        ["kw", 0.00],
        ["is", 0.00],
        ["ai", 0.00],
        ["pf", 0.00],
        ["kr", 0.03]
      ]
    }
  ]
};

class Am4chartMap extends Component {
  render() {
    return (

      <HighchartsReact
        constructorType={"mapChart"}
        highcharts={Highcharts}
        options={mapOptions}
      />

    );
  }
}

export default Am4chartMap;
