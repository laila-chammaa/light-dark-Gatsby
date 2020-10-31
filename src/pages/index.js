import React, { useContext } from "react"
import { css } from "@emotion/core";
import {useTheme} from "emotion-theming";
import Context from "../store/context";
import Layout from "../components/Layout";

const IndexPage = () => {
  //reading off the context
  const {state, dispatch} = useContext(Context);
  const theme = useTheme();

  return (
    <Layout>
      <div css={css`
      .welcome {
        color: ${state.isDark ? theme.dark.title_font : theme.light.title_font};
        margin: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 52px;
        font-family: "Roboto Mono";
        font-weight: lighter;
      }
      
      .box {
        color: ${state.isDark ? theme.dark.terminal_font : theme.light.terminal_font};
        background: ${state.isDark ? theme.dark.box_color : theme.light.box_color};
        box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        padding: 10px;
        font-size: 1.7em;
        width: 50rem;
        height: 20rem;
        margin: auto;
        font-family: Menlo;
        padding: 1em;
        padding-left: 30px;
        font-weight: 100;
      }

      .button {
        margin: auto;
        border: none;
        background-color: #AC7CB8;
        padding: 20px;
        border-radius: 40px;
        display: flex;
        margin-top: 40px;
        cursor: pointer;
      }
      .button:focus {
        outline: none;
        box-shadow: none;
      }
      `}>
        <p className="welcome">import &#123; laila &#125;</p>
        <div className="box">
          <p>// web developer, ui/ux designer in montreal <br/>
          // second year computer science at concordia<br/>
          // co-op program, intern at autodesk<br/>
          /* passionate about diversity in the  engineering community */<br/>
          <br/><br/>
          C02RT4F0L3WP:~ t_chaml$ </p>
        </div>
        <button className="button" onClick={() => dispatch({type: "TOGGLE_DARK_MODE"})}>toggle dark mode</button>
      </div>
    </Layout>
  )
}

export default IndexPage;