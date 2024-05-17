import React from 'react';
import styles from './TwoComponent.module.css';
import Image from 'next/image';
import travel from "../../../../public/house.png"
import edu from "../../../../public/graduate.jpg"

interface TextColumnComponentProps {
  subTitle: string;
  title: string;
  title2: string;
  description: string;
  option1?: string;
  option2?: string;
  option3?: string;
  option4?: string;
  option5?: string;
  button?: string;
}

interface ImageColumnComponentProps{
  imageUrl: any;
}

export const ImageComponent = ({ imageUrl }: ImageColumnComponentProps) => {
  return (
    <div>
      <div className={styles.image}>
        <Image src={imageUrl} alt="image" width={600} height={600} style={{textAlign: "center", alignSelf: "center"}} />
      </div>
    </div>
  )
}

export const TextComponent = ({ subTitle, title, title2, description, option1, option2, option3, option4, option5, button }: TextColumnComponentProps) => {
  return (
    <div>
      <div className={styles.text}>
        <span className={styles.subtitle}>{subTitle}</span>
        <h1 className={styles.title}>{title} <span className={styles.title2}>{title2}</span> </h1>
        <p className={styles.description}>{description}</p>
        <button className={styles.button}> {button} </button>
      </div>
    </div>
  )
}

export default function TwoComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.travel}>
        <ImageComponent
          imageUrl={travel} />
        <TextComponent

          subTitle={'EXPLORE OUR EXPERT'}
          title={'Travel, Tour, Study and '}
          title2={'Work Conveniently'}
          description='Riskout Consults lead in Travels agency and Study consulting.
            Prepares clientele for Teachers capacity building seminars and workshopsSchool Supervision, Mgt. and Teachers Recruiting, Curriculum Design and Development,'
          button='Learn More'
        />
      </div>

      <div className={styles.edu}>
        <ImageComponent
          imageUrl={edu} />
        <TextComponent
          subTitle={'EXPLORE OUR EXPERT'}
          title={'Travel, Tour, Study and '}
          title2={'Work Conveniently'}
          description='Riskout Consults lead in Travels agency and Study consulting.
            Prepares clientele for Teachers capacity building seminars and workshopsSchool Supervision, Mgt. and Teachers Recruiting, Curriculum Design and Development,'
          button='Learn More'
        />
      </div>
    </div>
  );
};
