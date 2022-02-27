import { html, LitElement } from "lit";
import "./dichotomy";

export class LeadershipDichotomies extends LitElement {
  render() {
    return html`
      <h1>Leadership Dichotomies</h1>
      <div style="margin: 0px 20px;">
        <p>
          <strong>What makes a great leader?</strong>
          <br />
          That question has been around for ages and will continue to be around
          for many ages to come. In 2006, Jocko Willink and Leif Babin spent
          several months leading a team of Seals as part of the battle of Ramadi
          in Iraq. During those months, along with their numerous other years of
          selfless service to our country, they learned valuable lessons about
          leading successful teams with which they attempted to share in
          <i>Extreme Ownership</i> and <i>The Dichotomy of Leadership</i>.
        </p>
        <p>
          In <i>Extreme Ownership</i> Jocko and Leif explained "Extreme
          Ownership [means] leaders must own everything in their world. There is
          no one else to blame." (Willink, Babin)
        </p>
        <p>
          However, after publishing <i>Extreme Ownership</i>, Jocko and Leif
          recognized that some people who read the book were taking their
          message too literally and taking their leadership to the extreme
          without leaving room for the fine nuances of leadership. As a result,
          they wrote <i>The Dichotomy of Leadership</i> "to help leaders
          understand this challenge and find the balance needed to most
          effectively lead and win. No matter the arena, balance must be
          achieved for optimal performance" (Willink, Babin xvii).
          <br />
          To sum it up they state, "In most cases, rather than extremes,
          leadership requires balance. Leaders must find the equilibrium between
          opposing forces that pull in opposite directions."
        </p>

        <dp-dichotomy
          low="Pushing Blame"
          middle="Own It All But Empower Others"
          high="Own Everything But Preventing Others' Growth"
        ></dp-dichotomy>

        <dp-dichotomy
          low="Submissive"
          middle="Resolute But Not Overbearing"
          high="Stubborn"
        ></dp-dichotomy>

        <dp-dichotomy
          low="Never Firing Anyone"
          middle="Knowing When to Mentor and When to Fire"
          high="Firing For Any Problem"
        ></dp-dichotomy>

        <dp-dichotomy
          low="Not Working Hard"
          middle="Train Hard But Train Smart"
          high="Blindly Over Training"
        ></dp-dichotomy>

        <dp-dichotomy
          low="Overly Cautious"
          middle="Aggressive But Not Reckless"
          high="Overly Aggressive And Reckless"
        ></dp-dichotomy>

        <dp-dichotomy
          low="No Discipline"
          middle="Disciplined But Not Rigid"
          high="Overly Disciplined And Rigid"
        ></dp-dichotomy>

        <dp-dichotomy
          low="Not Holding Anyone Accountable For Their Actions"
          middle="Hold People Accountable But Don't Hold Their Hand"
          high="Doing The Work For Others"
        ></dp-dichotomy>

        <dp-dichotomy
          low="Always Following"
          middle="A Leader And A Follower"
          high="Always Leading"
        ></dp-dichotomy>

        <dp-dichotomy
          low="Not Planning Enough"
          middle="Plan But Don't Overplan"
          high="Over Planning"
        ></dp-dichotomy>

        <dp-dichotomy
          low="Blindly Accepts Commands"
          middle="Humble But Not Passive"
          high="Questions Every Order"
        ></dp-dichotomy>

        <dp-dichotomy
          low="Distracted From The Primary Objective"
          middle="Focused But Detached"
          high="Singularly Focused"
        ></dp-dichotomy>
      </div>
    `;
  }
}
