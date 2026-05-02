import { ReactNode } from "react";
export type TestimonialItem = {
  message: string;
  linkText?: string;
  link?: string;
  from: string;
  position: string;
  date: string;
  linkedin: string;
};

export const testimonials: TestimonialItem[] = [
  {
    message:
      "Sheryl has an exceptional job in handling multiple complex engagements. Her key strengths are attention to detail, problem solving, ownership and dedication. She has done a great job in training the new hires adapt the change from college to corporate world in a smooth manner. Her positive attitude and staying calm in difficult situations helped manage the timelines and priorities in a better way. Sheryl has been the consistent top performer and also reliable throughout her journey in this role.",
    from: "Soujanya Salisam",
    position: "Manager",
    date: "March 17, 2025",
    linkedin:
      "https://www.linkedin.com/in/soujanya-salisam-96b332a6/",
  },
  {
    message:
      "I’ve worked with Sheryl for over one and a half years. I first met Sheryl when she was hired in August 2023 as a Data Analyst in the Audit and Assurance department of Deloitte. She was part of the team implementing analytical solutions and data insights using visualization for clients. I followed her performance closely and interacted with her frequently over her tenure regarding implementation strategy and was closely involved in building the deliverables. Sheryl has some of the best analytical skills including deep knowledge in Python needed to...[LINK]",
    from: "Ansh Jain",
    linkText: "Read more",
    link: "https://www.linkedin.com/in/sherylmathew11/details/recommendations/",
    position: "Senior",
    date: "February 23, 2025",
    linkedin:
      "https://www.linkedin.com/in/anshjain2/",
  },
  {
    message:
      "Sheryl did a great job on all the clients that she worked with me. She is proactive and has a keen eye when analyzing the data. Her quality of work is great. She delivers her work on time and communicates well on her observations. Her commitment to work is highly appreciated. She helps in bringing her juniors up to the speed. Keep up the good work Sheryl!",
    from: "Nagasreeja P",
    position: "Senior",
    date: "November 15, 2024",
    linkedin:
      "https://www.linkedin.com/in/nagasreeja-p-1595451b4/",
  },
  {
    message:
      "Sheryl consistently demonstrates strong performance by effectively managing her responsibilities. She ensures that deliverables are completed with both speed and high quality, consistently meeting deadlines. She proactively communicates her observations to the leads. ",
    from: "Abhilash",
    position: "Senior",
    date: "November 15, 2024",
    linkedin:
      "",
  },
  {
    message:
      "Sheryl proactively works on the clients assigned. Her quality of work is great. She delivers things on time. She is also detail oriented. She updates .. for all the engagements that she works on in a timely manner which is highly appreciated. Overall she is a great performer.",
    from: "Shreya Mehta",
    position: "Senior",
    date: "August 23, 2024",
    linkedin:
      "https://www.linkedin.com/in/shreya-mehta-9b2a2813b/",
  },
  {
    message:
      "Sheryl is always very smart and hard working team player. She delivers her projects with high quality. I wish her all the best in her future clients and be the top of her peer group. All the very best!",
    from: "Vipin Raj",
    position: "Senior",
    date: "June 25, 2024",
    linkedin:
      "https://www.linkedin.com/in/vipin-raj-51136791/",
  },
  {
    message:
      "Sheryl is hard working ,picked up things very quickly and gives attention to details. Her work on various projects for (client names hidden) [Client A], [Client B], [Client C], [Client D] and various other Je projects is highly appreciated. Her attention to details and consistent efforts in bringing innovative ideas to deliverables is a plus to her performance. The quality for her deliverables is remarkable and good team player by helping her peers. Keep up the good work!!",
    from: "Ruchi Jindal",
    position: "Senior Manager",
    date: "March 09, 2024",
    linkedin:
      "https://www.linkedin.com/in/ruchi-jindal-cfe-a87a9256/",
  },
];
