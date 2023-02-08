import { ReactComponent as Logo } from "../assets/SVGs/logo.svg";
import { ReactComponent as LinkedIn } from "../assets/SVGs/linkedin.svg";
import { ReactComponent as GitHub } from "../assets/SVGs/github.svg";
import { ReactComponent as Instagram } from "../assets/SVGs/instagram.svg";
import { ReactComponent as UpArrow } from "../assets/SVGs/arrow-up-circle.svg";
import { ReactComponent as HTML } from "../assets/SVGs/html.svg";
import { ReactComponent as CSS } from "../assets/SVGs/css.svg";
import { ReactComponent as JavaScript } from "../assets/SVGs/javascript.svg";
import { ReactComponent as React } from "../assets/SVGs/react.svg";
import { ReactComponent as Sass } from "../assets/SVGs/sass.svg";
import { ReactComponent as TailwindCSS } from "../assets/SVGs/tailwindcss.svg";
import { ReactComponent as Bootstrap5 } from "../assets/SVGs/bootstrap5.svg";
import { ReactComponent as WordPress } from "../assets/SVGs/wordpress.svg";
import { ReactComponent as PHP } from "../assets/SVGs/php.svg";
import { ReactComponent as MySQL } from "../assets/SVGs/mysql.svg";
import { ReactComponent as NodeJS } from "../assets/SVGs/nodejs.svg";
import { ReactComponent as MongoDB } from "../assets/SVGs/mongodb.svg";
import { ReactComponent as Python } from "../assets/SVGs/python.svg";
import { ReactComponent as Git } from "../assets/SVGs/git.svg";
import { ReactComponent as Figma } from "../assets/SVGs/figma.svg";
import { ReactComponent as Photoshop } from "../assets/SVGs/photoshop.svg";


const SVGs = {
  Logo,
  LinkedIn,
  GitHub,
  Instagram,
  UpArrow,
  HTML,
  CSS,
  JavaScript,
  React,
  Sass,
  TailwindCSS,
  Bootstrap5,
  WordPress,
  PHP,
  MySQL,
  NodeJS,
  MongoDB,
  Python,
  Git,
  Figma,
  Photoshop,
}

export default function SVG(props) {
  const SVGType = SVGs[props.type];
  if (props.width || props.height) {
    return <SVGType width={props.width} height={props.height} />;
  }
  return <SVGType />
}
