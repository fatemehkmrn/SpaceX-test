import * as React from "react";
// Utilities
import cn from "classnames";
import moment from "moment";
// Styles
import styles from "./index.module.scss"

const LaunchViewBox = ({ data, type }) => {
    return <div className={styles["container"]}>
        <div className={styles["upper-section"]}>
            <img width="150px" height="120px" alt="" src={type === "pastLaunches" ? data.links.mission_patch_small : "https://www.spacex.com/static/images/locations/kennedy.webp"} />
            <div className={styles["upper-section__info"]}>
                <div><label className={styles["label"]}>Mission Name: </label> {data.mission_name}</div>
                <div><label className={styles["label"]}>Launch Site: </label> {data.launch_site.site_name}</div>
                <div><label className={styles["label"]}>Launch Date: </label>{moment(data.launch_date_utc).format('MMM-DD-YYYY')}</div>
                {type === "pastLaunches" && <>
                    <span><label className={styles["label"]}>Launch Success: </label></span> <span className={cn(styles["status"], {
                        [`${styles["status--success"]}`]: data.launch_success,
                        [`${styles["status--failure"]}`]: !data.launch_success,
                    })} ></span>
                </>
                }
            </div>
        </div>
        {type === "pastLaunches" &&
            <div className={styles["bottom-section"]}>
                <a href={data.links.video_link}>Watch on Youtube!</a>
                <a href={data.links.wikipedia}>Read more!</a>
            </div>
        }

    </div>
}

export default LaunchViewBox;