


import React, { useState, useEffect } from "react";
import LearnButtons from '../../components/LearnButtons/LearnButtons';
import styles from "./LearnBlogs.module.scss";
import Loader from "../../components/Loader/Loader"; // Import the Loader component

const blogs = [
    {
        title: 'Understanding Cardiac Diseases',
        date: 'June 18, 2024',
        content: 'Cardiac diseases encompass a range of conditions that affect the heart. This blog delves into various types, causes, and treatments...',
        link: 'https://www.health.harvard.edu/topics/heart-health',
        image: '/images/blog1.webp'
    },
    {
        title: 'Symptoms of Heart Problems',
        date: 'May 24, 2024',
        content: 'Recognizing the symptoms of heart problems early can save lives. Learn about common signs and what to look out for...',
        link: 'https://www.mayoclinic.org/diseases-conditions/heart-disease/symptoms-causes/syc-20353118',
        image: '/images/blog2.webp'
    },
    {
        title: 'Precautions to Maintain a Healthy Heart',
        date: 'April 10, 2024',
        content: 'Preventing heart disease requires a combination of lifestyle changes and regular check-ups. Here are essential precautions to follow...',
        link: 'https://www.cdc.gov/heartdisease/prevention.htm',
        image: '/images/blog3.webp'
    },
    {
        title: 'Latest Research on Cardiac Health',
        date: 'March 15, 2024',
        content: 'Stay updated with the latest research and advancements in cardiac health. This blog covers recent studies and findings...',
        link: 'https://www.ahajournals.org/topic/cardiovascular-research',
        image: '/images/blog4.webp'
    },
    {
        title: 'Living with Heart Disease',
        date: 'February 5, 2024',
        content: 'Managing heart disease involves both medical treatment and lifestyle adjustments. Discover tips for living well with heart disease...',
        link: 'https://www.heart.org/en/health-topics/heart-attack/life-after-a-heart-attack/living-with-heart-disease',
        image: '/images/blog5.webp'
    },
    {
        title: 'Cardiac Rehabilitation: What You Need to Know',
        date: 'January 20, 2024',
        content: 'Cardiac rehabilitation is a crucial part of recovery for many heart patients. This blog explains the process and benefits...',
        link: 'https://www.clevelandclinic.org/health/treatments/17615-cardiac-rehabilitation',
        image: '/images/blog6.webp'
    },
    {
        title: 'Heart Disease in Women: What Are the Differences?',
        date: 'December 15, 2023',
        content: 'Heart disease affects women differently than men. Learn about these differences and why they matter...',
        link: 'https://www.goredforwomen.org/en/about-heart-disease-in-women/facts/why-heart-disease-strikes-women-differently',
        image: '/images/blog7.webp'
    },
    {
        title: 'The Role of Diet in Heart Health',
        date: 'November 10, 2023',
        content: 'A healthy diet is key to preventing and managing heart disease. This blog covers the best foods for heart health...',
        link: 'https://www.heartfoundation.org.au/Heart-health-education/Healthy-eating',
        image: '/images/blog8.webp'
    },
    {
        title: 'Exercise and Heart Health: Tips and Benefits',
        date: 'October 5, 2023',
        content: 'Regular exercise is vital for a healthy heart. Learn about the types of exercise that benefit your heart the most...',
        link: 'https://www.webmd.com/heart-disease/ss/slideshow-heart-disease-exercise-tips',
        image: '/images/blog9.webp'
    },
    {
        title: 'Stress and Heart Disease: Managing Stress for a Healthy Heart',
        date: 'September 1, 2023',
        content: 'Chronic stress can contribute to heart disease. This blog provides strategies to manage stress effectively...',
        link: 'https://www.heart.org/en/healthy-living/healthy-lifestyle/stress-management/stress-and-heart-health',
        image: '/images/blog10.webp'
    }
];

const LearnBlogs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Minimum 2 seconds loader display

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.blogPage}>
      <LearnButtons />
      <h1>Welcome to your daily Cardio Blogs Section</h1>
      {loading ? (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      ) : (
        <div className={styles.blogsContainer}>
          {blogs.map((blog, index) => (
            <div className={styles.blog} key={index}>
              <img src={blog.image} alt={blog.title} className={styles.blogImage} />
              <div className={styles.blogContent}>
                <h2>{blog.title}</h2>
                <p>{blog.date}</p>
                <p>{blog.content}</p>
                <a href={blog.link} target="_blank" rel="noopener noreferrer">Read more</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LearnBlogs;
