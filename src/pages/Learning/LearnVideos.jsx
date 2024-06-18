// // import React from "react";
// // import LearnButtons from "../../components/LearnButtons/LearnButtons";
// // import styles from "./LearnVideos.module.scss";

// // const LearnVideos = () => {
// //   return (
// //     <div className={styles.learnvideos}>
// //       <LearnButtons />
// //       <div class="video-container">
// //         <div class={styles.iframewrap}>
// //           <iframe
// //             title="5 health tips"
// //             src="https://www.youtube.com/embed/cW-vmmHgMOM"
// //             frameBorder="0"
// //             allowFullScreen
// //           ></iframe>
// //           <h3 className={styles.content}>
// //             The recent spate deaths in India due to heart diseases has raised
// //             concerns.
// //           </h3>
// //         </div>

// //         <div className={styles.iframewrap}>
// //           <iframe
// //             title="5 health tips"
// //             src="https://www.youtube.com/embed/cW-vmmHgMOM"
// //             frameborder="0"
// //             allowfullscreen
// //           ></iframe>
// //           <h3 className={styles.content}>
// //             The recent spate deaths in India due to heart diseases has raised
// //             concerns.
// //           </h3>
// //         </div>

// //         <div class={styles.iframewrap}>
// //           <iframe
// //             title="5 health tips"
// //             src="https://www.youtube.com/embed/cW-vmmHgMOM"
// //             frameBorder="0"
// //             allowFullScreen
// //           ></iframe>
// //           <h3 className={styles.content}>
// //             The recent spate deaths in India due to heart diseases has raised
// //             concerns.
// //           </h3>
// //         </div>

// //         <div class={styles.iframewrap}>
// //           <iframe
// //             title="5 health tips"
// //             src="https://www.youtube.com/embed/cW-vmmHgMOM"
// //             frameBorder="0"
// //             allowFullScreen
// //           ></iframe>
// //           <h3 className={styles.content}>
// //             The recent spate deaths in India due to heart diseases has raised
// //             concerns.
// //           </h3>
// //         </div>

// //         <div class={styles.iframewrap}>
// //           <iframe
// //             title="5 health tips"
// //             src="https://www.youtube.com/embed/cW-vmmHgMOM"
// //             frameBorder="0"
// //             allowFullScreen
// //           ></iframe>
// //           <h3 className={styles.content}>
// //             The recent spate deaths in India due to heart diseases has raised
// //             concerns.
// //           </h3>
// //         </div>
// //       </div>
// //       <div className={styles.extension}></div>
// //     </div>
// //   );
// // };
// // export default LearnVideos;





// import React, { useState, useEffect } from "react";
import LearnButtons from "../../components/LearnButtons/LearnButtons";
import styles from "./LearnVideos.module.scss";
// import axios from "axios"; // Import Axios for making HTTP requests

// const LearnVideos = () => {
//   const [videos, setVideos] = useState([]); // State to store video data

//   useEffect(() => {
//     // Fetch video data when component mounts
//     const fetchVideos = async () => {
//       try {
//         // Make a GET request to the API endpoint for fetching videos
//         const response = await axios.get("https://api.video.endpoint/videos");

//         // Set the retrieved video data in state
//         setVideos(response.data);
//       } catch (error) {
//         console.error("Error fetching videos:", error);
//       }
//     };

//     fetchVideos(); // Call the fetchVideos function
//   }, []); // Empty dependency array ensures the effect runs only once

//   return (
//     <div className={styles.learnvideos}>
//       <LearnButtons />
//       <div className="video-container">
//         {/* Map over the videos array and render each video */}
//         {videos.map((video) => (
//           <div className={styles.iframewrap} key={video.id}>
//             <iframe
//               title={video.title}
//               src={`https://embed.api.video/vod/${video.id}`}
//               AIzaSyD4EAqbs27ISCW4JPzlKgGg6wbEoRARCpM
//               frameBorder="0"
//               allowFullScreen
//             ></iframe>
//             <h3 className={styles.content}>{video.description}</h3>
//           </div>
//         ))}
//       </div>
//       <div className={styles.extension}></div>
//     </div>
//   );
// };

// export default LearnVideos;




import React, { useState, useEffect } from "react";
import axios from "axios";

const LearnVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search", {
            params: {
              key: "AIzaSyD4EAqbs27ISCW4JPzlKgGg6wbEoRARCpM",
              q: "cardiac diseases",
              part: "snippet",
              maxResults: 20,
              type: "video"
            }
          }
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className={styles.learnvideos}>
      <LearnButtons />
      <h1>Welcome to your daily Video Feed </h1>

      <div className={styles.videoContainer}>
        {videos.map((video, index) => (
          <div key={index} className={styles.iframewrap}>
            <iframe
              title={video.snippet.title}
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <h3 className={styles.content}>
              {video.snippet.title}
            </h3>
          </div>
        ))}
      </div>
      <div className={styles.extension}></div>
    </div>
  );
};

export default LearnVideos;
