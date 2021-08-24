import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://scontent.fkul16-1.fna.fbcdn.net/v/t1.6435-9/84577373_2662913597111296_1396046018251849728_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=eBCr3m_T-ukAX88Z6YD&_nc_ht=scontent.fkul16-1.fna&oh=bbe88255198ffa6b0778a61ab77ae695&oe=614A2AED"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Chris Samson</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://scontent.fkul16-1.fna.fbcdn.net/v/t31.18172-1/c60.140.360.360a/p480x480/12983893_1164835133540159_6412034145052046715_o.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=7OBEFhZeWXwAX-Nw-7j&_nc_ht=scontent.fkul16-1.fna&oh=55dd63c7bcf4039e02f83c0634b9d398&oe=6149E767"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jun Liang</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://scontent.fkul16-1.fna.fbcdn.net/v/t1.6435-1/s480x480/89374721_3050164558348262_5021706694837665792_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=j_dJHPbIq9gAX-F0I1g&_nc_ht=scontent.fkul16-1.fna&oh=ffafba70310cb5bfb5ba60af77fd1363&oe=61495D8F"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Syed Kumail</span>
            <span className="widgetSmUserTitle">Games Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Elon Johnson</span>
            <span className="widgetSmUserTitle">Software Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Robert Jackson</span>
            <span className="widgetSmUserTitle">Mobile Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
